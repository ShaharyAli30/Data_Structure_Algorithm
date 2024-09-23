function bubblesort(arr)
{    let swapped
    do{
   
    for(let i= 0; i<arr.length -1;i++)
    {    swapped = false
        if(arr[i] > arr[i+1])
        {
            let temp = arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            swapped = true
        }
    }
   }while(swapped)
}
const arr = [-8,3,2,-1,0]

console.log(arr)
bubblesort(arr)
console.log("sorted Array: ")
console.log(arr)