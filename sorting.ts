const bubbleSort = ( arr: number[] ) => {
    let n = arr.length
    for( let i = 0; i < n; i++ ){
        for( let j = 0;  j < n- i -1; j++) {
            if( arr[j] > arr[j+1] ) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}

const selectionSort = ( arr: number[] ) => {
    let n = arr.length
    for( let i = 0; i < n; i++ ){
        let lowest = i;
        for( let j = i + 1;  j < n; j++) {
            if( arr[lowest] > arr[j] ) {
                lowest = j;
            }
        }
        if( i !== lowest ) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
        }
    }
}

const insertionSort = ( arr: number[] ) => {
    let n = arr.length
    for( let i = 0; i < n; i++ ){
        let currentValue = arr[i];
        let j;
        for(  j = i - 1;  j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentValue

        console.table(arr);
    }
}


const mergesort = ( arr: number[] ): any => {
    if (arr.length < 2) {
        return arr
    }
    
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergesort(leftArr), mergesort(rightArr))
}

const merge = ( leftArr: number[], rightArr: number[]): any => {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift())
      } else {
        sortedArr.push(rightArr.shift())
      }
    }
    const resultArr = [...sortedArr, ...leftArr, ...rightArr]
    
    return resultArr
}

let arr = [64, 34, 25, 12, 22, 11, 90];

// bubbleSort(arr);

// selectionSort(arr);

// insertionSort(arr);

let sortArray = mergesort(arr);

const printArray = ( arr: number[] ) => {
    let n = arr.length
    for (let i=0; i < n; i++)
        console.log(arr[i]+ " ");
}

printArray(sortArray);
