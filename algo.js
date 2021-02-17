function Inplace(arr){
    let temp
    for(let x=0; x < arr.length  / 2; x++){
        temp= arr[x];
        arr[x] = arr[arr.length - 1 - x]
        arr[arr.length - 1 - x] = temp
    }
    return arr;
}
const arr = [10, 7, 6, 5,1]
console.log(Inplace(arr));
// [1,5,6,7,10]

// temp = 10
// arr[0] = 1 [1, 7, 6, 5,1]
// arr[arr.length - 1 - 0] = 10 
