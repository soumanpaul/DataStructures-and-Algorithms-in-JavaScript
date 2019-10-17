var recursiveFunction = function (arr, left, right, data) {
	 while (left <= right) {
        var mid = Math.floor((left + right) / 2);

        if (arr[mid] == data)
            return true;
        else if (data < arr[mid])
            right = mid -1;
        else
            left = mid +1;
    }
    return false;
}

// Driver code
var arr = [1, 3, 5, 7, 8, 9];
var data = 8;

if (recursiveFunction(arr, 0, arr.length - 1, data))
	console.log("Element found!");
else console.log("Element not found!");



