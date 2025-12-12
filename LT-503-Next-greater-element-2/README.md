# Next Greater Element II — Full Detailed Explanation (Hinglish)

This document explains **how the algorithm solves Next Greater Element II**, step-by-step, with a **very detailed dry run**.  
We use a **Monotonic Stack** + **Circular Array Simulation** for an efficient **O(n)** solution.

---

## 🔥 Problem Summary

Given a **circular integer array** `nums`, find the **next greater element** for every element.

- Circular means: last element ke baad fir se first element consider hoga  
- Agar koi bigger element aage nahi mila → return `-1`

### Example  
Input:  
`[1, 2, 1]`  

Output:  
`[2, -1, 2]`

---

# 🚀 Approach (Simple Hinglish Explanation)

### Main logic ke 2 parts:

---

## ✅ 1. **Monotonic Decreasing Stack**

Stack me hum **sirf un elements ko rakhte hain jo future me kisi ka “next greater” ban sakte hain**.

- Stack always decreasing order me rakhenge:  
  Top pe smallest element
- Jab new element chhota ho → top element next greater ho sakta hai
- Jab new element bada ho → pop until stack contains a bigger element

---

## ✅ 2. **Circular Array Handling**

Array circular hai → isliye hum array ko **2 times traverse** karte hain.

But doubling array nahi karte. Bas index ko mod kar dete hain:

---

## 🧠 High Level Algorithm Flow

1. `ans[]` ko -1 se fill kar do  
2. Stack empty rakho  
3. Loop backward from `2n - 2` down to `0`  
4. Har index pe:
   - Pop all smaller/equal elements from stack  
   - Pehla greater element milte hi → `ans[i % n] = stack top`  
   - Current element ko stack me push kar do  
5. `ans` return kar do

---

# 📌 Code

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(arr) {
    
    let stack = [];
    let n = arr.length;
    let ans = new Array(n).fill(-1);

    // Put last element in stack initially
    stack.push(arr[n - 1]);

    // Traverse from 2n - 2 down to 0 (simulate 2 loops using modulo)
    for (let i = (2 * n) - 2; i >= 0; i--) {

        while (stack.length) {
            let top = stack[stack.length - 1];

            // Found a next greater element
            if (arr[i % n] < top) {
                ans[i % n] = top;
                break;
            } else {
                stack.pop();
            }
        }

        // Push current element for future comparisons
        stack.push(arr[i % n]);
    }

    return ans;
};