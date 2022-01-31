export const productId = (string) => {
  let randomId = "";
  for (let i = 0; i < string.length; i++) {
    let j =
      Math.floor(Math.random() + string.charCodeAt(i)) * string.length +
      string.substr(string.length / 2);
    randomId = j;
  }
  return randomId;
};
