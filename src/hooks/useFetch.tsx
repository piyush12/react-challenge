import React, { useCallback, useEffect, useState } from "react";

interface ReturnType {
  data: null;
  error: null;
}

function useFetch(url: string, options: RequestInit): ReturnType {
  const [data, setData] = useState<null>(null);
  const [error, setError] = useState<null>(null);
  const fetchData = useCallback(
    async (url: string, options: RequestInit) => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        return data;
      } catch (error) {
      //  throw new Error("Something went wrong");
        return Promise.reject("Something went wrong")
      }
    },
    [url]
  );

  useEffect(() => {
    if (!url) return;
    fetchData(url, options)
      .then((data) => {
        console.log("data",data);
        setData(data);
      })
      .catch((e) => {
        console.log("e",e);
        setError(e)});
  }, [url]);

  return {
    data,
    error,
  };
}

export default useFetch;
