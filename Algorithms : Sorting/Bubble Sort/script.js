// Bubble Sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    
    let lengthOfUnsortedArray = array.length - 1;

    while (lengthOfUnsortedArray > 0) {
        for (let i = 0; i <= lengthOfUnsortedArray; i++) {
            if (array[i] > array [i+1]) {
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
            }
        }
        lengthOfUnsortedArray--;
    }

}

bubbleSort(numbers);
console.log(numbers);