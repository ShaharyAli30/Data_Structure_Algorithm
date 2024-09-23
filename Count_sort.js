function Count_sort(arr){
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);
  arr.forEach( num => count[num]++);
    
  let sortindux = 0;
   count.forEach((numcount,i) =>
   {
    while(numcount > 0)
        {
           arr[sortindux++] = i;
           numcount--;
        }
      
   });
   return arr;
    

}
const arr = [8,3,2,1,0,9,8]
console.log(Count_sort(arr))