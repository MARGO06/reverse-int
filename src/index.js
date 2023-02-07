module.exports = function reverse (n) {
  let str = String(n);
  let arr1 = str.split('');
  let arr3 = arr1.reverse( );
  let str2='';
  if (n<0){
    arr3.pop('');
    return str2=arr3.join("");
  } else {
    return  str2 = arr3.join("");
  }
}
