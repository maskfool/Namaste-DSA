/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(arr) {
    
    //using modding and making loop tp run two times in same array i%n gives same index position 

    //without doubling array 
    
    let stack=[];
    let n = arr.length;
    let ans = new Array(n).fill(-1);
    stack.push(arr[n-1]);
    for(let i =(2*n)-2;i>=0;i--){
        while(stack.length){
            let top = stack[stack.length-1];
            if(arr[i%n]<top)
            {
                ans[i%n]=top;
                break;
            }else{
                stack.pop();
            }

            // if(!stack.length){
            //     ans[i%n]=-1;
            // }
        }
        stack.push(arr[i%n]);
    }
    return (ans.slice(0,n));

    
};