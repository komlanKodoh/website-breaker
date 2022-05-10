

const findSum  = (arr, target) => {
    let len = arr.length;

    let left_low = 0;
    let left_high = len -1 ;

    let right_low = 0;
    let right_high = len - 1;

    const findLeft = (low, high, target ) => {
        left_low = low;
        left_high = high;

        while ( left_low <= left_high ){
            let middle = Math.floor( (left_low +  left_high) / 2  );

            if ( arr[middle] < target) {
                left_low = middle + 1;
            }
            else if ( arr[middle] > target) {
                left_high = middle - 1
            }
            else {
                console.log(target, arr[middle])
                return true;
            }
        }

        return false;
    }

    const findRight = (low, high, target) => {
        right_low = low;
        right_high = high;

        while ( right_low <= right_high ){
            let middle = Math.floor( (right_low +  right_high) / 2  );

            if ( arr[middle] < target) {
                right_low = middle + 1;
            }
            else if ( arr[middle] > target) {
                right_high = middle - 1
            }
            else {
                return true;
            }
        }

        return false;
    }

    let left = true;
    while ( left_low < right_high ){
        let found ;

        if ( left ){
            found = findLeft(left_low , right_high - 1, target - arr[right_high] );
            left = !left;
        }else {
            found = findRight( left_low + 1, right_high, target - arr[left_low] );
            left = !left;
        }

        if ( found )return true;
    }

    return false;
}

let test  = [1, 2, 4, 7];
let test2 = [];

console.log ( findSum (test,6)  );