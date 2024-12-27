import React from "react";

function Header({ onGenerateArray, onStartSorting, onAlgorithmChange, speed, setSpeed, sorting ,length}) {
  return (
    <div className="bg-gray-800 text-white p-4 shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Sorting Algorithm Visualizer</h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onGenerateArray}
          disabled={sorting}
          className={`px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-medium ${
            sorting && "opacity-50 cursor-not-allowed"
          }`}
        >
          Generate Array
        </button>
        <select
          onChange={(e) => onAlgorithmChange(e.target.value)}
          disabled={length}
          className={`px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none ${
            length && "opacity-50 cursor-not-allowed"
          }`}
        >
          <option value={20}>20</option>
          <option value={40}>40</option>
          <option value={80}>80</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
        </select>
        <select
          onChange={(e) => onAlgorithmChange(e.target.value)}
          disabled={sorting}
          className={`px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none ${
            sorting && "opacity-50 cursor-not-allowed"
          }`}
        >
          <option value="bubbleSort">Bubble Sort</option>
          <option value="quickSort">Quick Sort</option>
          <option value="mergeSort">Merge Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="selectionSort">Insertion Sort</option>
        </select>
        <button
          onClick={onStartSorting}
          disabled={sorting}
          className={`px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white font-medium ${
            sorting && "opacity-50 cursor-not-allowed"
          }`}
        >
          Start Sorting
        </button>
        <div className="flex items-center gap-2">
          <label className="font-medium">Speed:</label>
          <input
            type="range"
            min="100"
            max="500"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            disabled={sorting}
            className={`w-32 ${
              sorting && "opacity-50 cursor-not-allowed"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
