async function selectionSort(array, setArray, speed) {
    const arr = [...array];
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]); // Update state for re-render
          await new Promise((resolve) => setTimeout(resolve, speed)); // Add delay
        }
      }
    }
  }
  export default selectionSort;