function insert(arr){
    let sortedArr = [];
    for(let i = 0; i < arr.length; i ++){
        let j;
        let value = arr[i];
            for(j = i - 1; j > -1 && arr[j] > value; j--){
                arr[j + 1] = arr[j];
            }
            arr[j+ 1] = value;
        }
        return arr;
        
    }
let thing = [93, 27, 14, 66, 20000000000000006, 1, 34, 5, 661, 44, 22]
console.log(insert(thing));