function bubbleSort(arr){
    let j =1;
    while (j>0){
        j=0;
        for (let i=0; i<arr.length-1; i++){
            if (arr[i]>arr[i+1]){
                let holder = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = holder;
                j++;
            }
        }
    }
    return arr;
}

arr = [1,3,2,4,10,5,6,203,198];
bubbleSort(arr);
console.log(arr);
