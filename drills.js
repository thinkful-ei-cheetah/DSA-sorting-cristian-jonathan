/* eslint-disable strict */
// bubble sort

const LL = require('./LinkedList')

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



//
//
//
// algorti


const arr = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];
// console.log(quickSort(arr));


/// QUESTION 2
//1 [ 3, 9, 10, 12, 19, 14, 17, 16, 13, 15 ]
//2 [ 14, 9, 13, 15, 19, 10, 3, 16, 12, 17 ]

// 
function qSort(arr, start=0, end=arr.length) {

  if (start >= end)
    return arr;

  const middle = partition(arr, start, end);
  arr = qSort(arr, start, middle);
  arr = qSort(arr, middle+1, end);
  return arr;
}

const data = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

// console.log(qSort(data.split(' ').map(number => parseInt(number))));

function mSort(array) {
  if (array.length <=1) {
    return array;
  }

  const middle = Math.floor(array.length/2)
  let left = array.slice(0, middle)
  let right = array.slice(middle, array.length)

  left = mSort(left);
  right = mSort(right);

  return merge(left, right, array);
}

// console.log(mSort(data.split(' ').map(number => parseInt(number))));

function createLL() {
  const test = new LL()
  test.insertLast(9);
  test.insertLast(3);
  test.insertLast(7);
  test.insertLast(2);
  test.insertLast(4);
  test.insertLast(1);
  test.insertLast(5)
  return test;
}

// sorting linked list
function size(LL) {
  let size = 0

  let currNode = LL.head

  while (currNode !== null) {
    size++
    currNode = currNode.next;
  }

  return size
}

function middle(LL) {
  let slowNode = LL.head;
  let fastNode = LL.head;
  while (fastNode !== null) {
    fastNode = fastNode.next.next;
    slowNode = slowNode.next;
  }
  return slowNode.val;
}

function sortLL(linkedlist) {

  if (size(linkedlist) <= 1) {
    return linkedlist;
  }
  let currNode = linkedlist.head;
  let fastNode = linkedlist.head;
  let left = new LL();
  let right;

  while (fastNode !== null) {
    left.insertLast(currNode.value);
    fastNode = fastNode.next.next;
    currNode = currNode.next;  // 3
  }

    linkedlist.head = currNode.next; 
    right = linkedlist; 
    //break;   // left: 1 -> 2 // right: 3 -> 4


  //left = mergeSort(left);
 // right = mergeSort(right);

  //return LLmerge(left, right, LL);
}

sortLL(createLL());