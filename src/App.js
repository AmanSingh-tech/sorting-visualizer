import { useState } from "react";
import Header from "./components/Header"; // Assuming Header and ArrayBars are imported
import ArrayBars from "./components/ArrayBars";
import bubbleSort from "./algorithms/bubbleSort";
import quickSort  from "./algorithms/quickSort";
import  selectionSort  from "./algorithms/selectionSort";
import insertionSort from "./algorithms/insertionSort";

const App = () => {
  const [array, setArray] = useState(Array(20).fill(350));
  const [sorting, setSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [speed, setSpeed] = useState(10);
  const [timeComplexity, setTimeComplexity] = useState("O(n^2)");
  const [timeTaken, setTimeTaken] = useState(0);
  const [length, setLength] = useState(20);

  const generateArray = () => {
    const newArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 300) + 50);
    setArray(newArray);
  };

  const onStartSorting = async () => {
    setSorting(true);
    if (algorithm === "bubbleSort") await bubbleSort(array, setArray, speed, setTimeComplexity,setTimeTaken);
    else if (algorithm === "quickSort") await quickSort(array, setArray, speed);
    else if (algorithm === "selectionSort") await selectionSort(array, setArray, speed);
    else if (algorithm === "insertionSort") await insertionSort(array, setArray, speed);
    setSorting(false);
  };

  return (
    <div className="min-h-screen flex flex-col  bg-black">
      <Header
        onGenerateArray={generateArray}
        onStartSorting={onStartSorting}
        onAlgorithmChange={setAlgorithm}
        speed={speed}
        setSpeed={setSpeed}
        sorting={sorting}
        length={length}
      />
      <div className="mt-32 w-full flex justify-center">
        <ArrayBars array={array} sorting={sorting} />
      </div>
      <div className="text-white ">TimeComplexity:{timeComplexity}</div>
      <div className="text-white ">TimeTaken:{timeTaken}ms</div>
    </div>
  );
};

export default App;
