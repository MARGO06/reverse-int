module.exports = function reverse (n) {
  let str= String(n);
  let arr1= str.split('');
 let arr2= arr1.reverse();
 let str1= arr2.join('');
 let num1=Number(str1);
 return num1*(-1);
 
   
}
