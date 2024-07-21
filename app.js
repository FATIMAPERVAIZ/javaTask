// 1. Create a function that reverses an array. Start small here and work your way up. Begin
// with an array of 5 numbers, and then try your program with a larger array to verify its
// success.
function reverseArray(array){

console.log(array.length)
for(let i=(array.length)-1;i>=0;--i){
  console.log("My reverse array pattern is :"+array[i])  
}
}
const array =  ['a','b','c','d','e']
reverseArray(array);

let arr=[];
let size=prompt("How many elements you wanna keep in your array")
for(let i=0;i<size;i++){
arr[i]=prompt("Enter "+i+" index input:")}
reverseArray(arr);


// 2. Create a function that filters out negative numbers. In this challenge, you’ll have a
// function that takes an array as an input and returns an array. But if all goes according
// to plan, it’ll remove the negative numbers. This is another example of a task that’ll be
// useful when combing through data and looking for clever ways to eliminate “bad
// data.”

function eliminateneg(myarr){
    for(let i=0;i<myarr.length;i++){
        if(myarr[i]<0){
            (myarr).splice(i,1);
            i--;}
        
    }
    return myarr;
    }
let myarr=[1,2,-5,2.3,-1,9,-2,9]
let arr1=eliminateneg(myarr);
console.log(arr1);

// 3. Return the number of vowels in a string. Create a function that’ll return an integer of
// the number of vowels found in a string. This is a great way to practice determining the
// features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared
// to determine what datasets (or just strings) consist of.
function vowelreturn(string){
    let count = 0;
for(let i=0;i<string.length;i++){
if(string[i]=='a'|| string[i]=='e'|| string[i]=='i'|| string[i]=='o'|| string[i]=='u'){
    count++;
}
}
return count;

}
let string = "aekiubj";
let cnt=vowelreturn(string)
console.log(cnt);

// 4. Check if a string is a palindrome. A palindrome is a word, phrase, number, or other
// sequences of characters that reads the same forward and backward (like the words
// “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input
// and returns a Boolean indicating whether the string is a palindrome. Test your
// function with different strings to ensure it works correctly.
function palindrome(string2){
    for(let  i=0;i<(string2.length)/2;i++){
        if(string2[i]!=string2[string2.length-i-1]){
            return false;
        }
        else {
            return true;
        }
    
    }
    }

let string2 = "kayak";
console.log("your input is palindrome "+palindrome(string2))

// 5. Write a JavaScript program to check whether two given integer values are in the
// range 50 - 99 (inclusive). Return true if either of them falls within the range.
function checkinput(){
let n1=prompt("Enter First number")
let n2=prompt("Enter second number")
if((n1>=50 && n1<=99 )&& (n2>=50 && n2<=99)){
    return true;
}
else {
    return false
}}
console.log("Enter number is in the range of 50 to 99 "+checkinput())

// 6. Write a JavaScript program to get the minimum value of an array, after mapping each
// element to a value using the provided function.
// question is incomplete

// 7. Write a JavaScript program to create an updated string of 4 copies of the last 3
// characters of a given original string. The string length must be 3 and above.

let str3 = "FatimaPervaiz"
let cpy1_str=str3.slice(str3.length-3,str3.length)
let cpy2_str=str3.slice(str3.length-3,str3.length)
let cpy3_str=str3.slice(str3.length-3,str3.length)
let cpy4_str=str3.slice(str3.length-3,str3.length)
console.log(cpy1_str)
console.log(cpy2_str)
console.log(cpy3_str)
console.log(cpy4_str)

// 8. Write a JavaScript program to find the types of a given angle.
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

var angle=prompt("Enter angle in the range of 0 to 180")
if(angle>=0 && angle<90){
    console.log("Given angle is acute angle");
}
else if(angle==90){
    console.log("Given angle is right angle")
}
else if(angle>90 && angle<180){
    console.log("Given angle is obtuse angle");
}
else if(angle==180){
    console.log("Given angle is staight angle")
}
else(
    alert("your angle is in wrong range")
)
// 9. Write a JavaScript program to find the smallest round number not less than a given
// value. Note: A round number is informally considered to be an integer that ends with
// one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.


// 10. Write a JavaScript program to find the index of an array item in a for loop.
let arr2=[];
let size2=prompt("How many elements you wanna keep in your array")
alert("size of Array is "+size2)
for(let i=0;i<size;i++){
arr2[i]=prompt("Enter "+i+" index input:")}
let index = prompt("Enter index of array at that index value you want")
let result = arr2.CharAt(index)
console.log(index+ "value at  your array is "+result)

