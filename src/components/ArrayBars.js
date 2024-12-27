import React from "react";

function ArrayBars({ array, sorting }) {
  return (
    <div className="array-container flex justify-center items-end mt-8 space-x-2">
      {array.map((value, idx) => (
        <div
          key={idx}
          className={`array-bar w-8 transition-all duration-200 ease-in-out ${
            sorting ? "bg-red-500" : "bg-emerald-500"
          }`}
          style={{
            height: `${value}px`, // Dynamic height based on array value
            margin: "0 2px", // Space between bars
          }}
        ></div>
      ))}
    </div>
  );
}

export default ArrayBars;
