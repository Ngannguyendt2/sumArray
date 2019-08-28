let arr=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
function sumArray() {
    for(let i=0;i<arr.length-1;i++)
    {
        if(i%2==0)
        {
            sum+=arr[i];
        }
    }
    return sum;
}
document.write("Sum of arr: "+sumArray());