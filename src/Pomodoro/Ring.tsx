import React from "react";

export default function Ring({ timerEnds }: { timerEnds: boolean }) {
  return (
    <div className={`ring ${timerEnds ? "ending" : ""}`}>
      <svg width='518' height='518' viewBox='0 0 518 518'>
        <circle strokeWidth='9px' x='0' y='y' cx='259' cy='259' r='254' />
      </svg>
    </div>
  );
}
