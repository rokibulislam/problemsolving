var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var bubbleSort = function (arr) {
    var _a;
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
};
var selectionSort = function (arr) {
    var _a;
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        var lowest = i;
        for (var j = i + 1; j < n; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            _a = [arr[lowest], arr[i]], arr[i] = _a[0], arr[lowest] = _a[1];
        }
    }
};
var insertionSort = function (arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        var currentValue = arr[i];
        var j = void 0;
        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
        console.table(arr);
    }
};
var mergesort = function (arr) {
    if (arr.length < 2) {
        return arr;
    }
    var mid = Math.floor(arr.length / 2);
    var leftArr = arr.slice(0, mid);
    var rightArr = arr.slice(mid);
    return merge(mergesort(leftArr), mergesort(rightArr));
};
var merge = function (leftArr, rightArr) {
    var sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        }
        else {
            sortedArr.push(rightArr.shift());
        }
    }
    var resultArr = __spreadArray(__spreadArray(__spreadArray([], sortedArr, true), leftArr, true), rightArr, true);
    return resultArr;
};
var arr = [64, 34, 25, 12, 22, 11, 90];
// bubbleSort(arr);
// selectionSort(arr);
// insertionSort(arr);
var sortArray = mergesort(arr);
var printArray = function (arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++)
        console.log(arr[i] + " ");
};
printArray(sortArray);
