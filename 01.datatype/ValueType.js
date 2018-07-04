//number
var num1 = "10";
var num2 = 10;
console.log("num1 :",typeof num1,",num2 :", typeof num2);  //string number

//string
var str = "string";
console.log("str :",typeof str);

str[0] = "S"
console.log("str :",str);  //수정 불가
console.log("str[0] :",str[0]);  //index로 접근 가능

//boolean
var boo1 = true;
var boo2 = "true";
console.log("boo1 :",typeof boo1,",boo2 :",typeof boo2);

//null & undefined
var value;
console.log("value :",typeof value);
var value = null;
console.log("value :",typeof value);
console.log(value===null);