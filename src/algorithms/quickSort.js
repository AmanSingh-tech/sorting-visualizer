async function quickSort(array, setArray, speed) {
    async function partition(low, high) {
      const pivot = array[high];
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
          i++;
          [array[i], array[j]] = [array[j], array[i]];
          setArray([...array]);
          await new Promise((resolve) => setTimeout(resolve, speed));
        }
      }
  
      [array[i + 1], array[high]] = [array[high], array[i + 1]];
      setArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, speed));
  
      return i + 1;
    }
  
    async function quickSortHelper(low, high) {
      if (low < high) {
        const pi = await partition(low, high);
        await quickSortHelper(low, pi - 1);
        await quickSortHelper(pi + 1, high);
      }
    }
  
    const arr = [...array];
    await quickSortHelper(0, arr.length - 1);
    setArray([...arr]);
  }
  export default quickSort;