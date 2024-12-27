async function insertionSort(array,setArray,speed) {
    const arr = [...array];
    const n = arr.length;
    for(let i=1;i<n;i++){
        let current = arr[i];
        let j= i-1;
        while(j>=0 && arr[j]>current){
            arr[j+1] = arr[j];
            setArray([...arr]);
            await new Promise((resolve) => setTimeout(resolve, speed));
            j--;
        }
    }
}

export default insertionSort;