/* eslint-disable strict */
// bubble sort

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i+1);
      swaps++;
    }
  }

  if (swaps > 0) {
    return bubbleSort(arr)
  }

  return arr;
}

// merge sort

function mergeSort(arr, counter=0) {
  console.log(arr, counter)
  if (arr.length <= 1) {
    return arr;
  }


  const middle = Math.floor(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = mergeSort(left, counter+1);
  right = mergeSort(right, counter+1);
  return merge(left, right, arr);
}

function merge(left, right, arr) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      arr[outputIndex++] = left[leftIndex++]
    }
    else {
      arr[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    arr[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    arr[outputIndex++] = right[i];
  }
  return arr;
}

// quick sort

function quickSort(arr, start=0, end=arr.length) {
  if (start >= end) {
    return arr;
  }

  const middle = partition(arr, start, end);
  arr = quickSort(arr, start, middle);
  arr = quickSort(arr, middle+1, end);
  return arr;
}

function partition(arr, start, end) {
  const pivot = arr[end - 1];
  let j = start;

  for (let i = start; i < end-1; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, j);
      j++;
    }
  }
  swap(arr, end-1, j);
  return j;
}

// understanding merge sort
// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, | 16, 49, 39, 27, 43, 34, 46, 40

// 1) 21, 1
// 2) the left half of the list would be sorted
// 3) 1 & 21
// 4) 1 21 26 45 & 2 9 28 29 

// console.log(mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]));


// after first fort 3 9 1 14 17 24 22 20
// 14 17 3 9 1 24 22 20
// true -> The pivot could have been either 14 or 17
// all other answers are false

