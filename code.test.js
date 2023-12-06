const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSearch =
    jsc.forall("array nat", function(arr) {
        if(arr.length > 0) {
            arr.sort(function(a, b) { return a - b; });
            // used to account for duplicates, example: [6,6] when target is 6 returns index 1 not 0, so test fails without the OR condition
            return binarySearch(arr, arr[0]) === 0 || binarySearch(arr, arr[0]) === 1; 
        } else {
            return binarySearch(arr, "foo") === -1;
        }
    });

jsc.assert(testSearch);
