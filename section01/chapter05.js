//1.대입연산자 
console.log("1.대입연산자"); 
let a1 = 1;  
console.log(a1);
 
//2.산술연산자 
console.log("2.산술연산자");
let a2 = 1;  
let b2 = 2;  
console.log(a2 + b2);  
console.log(a2 - b2);  
console.log(a2 * b2);  
console.log(a2 / b2);   //0.5 
console.log(a2 % b2);  //1 
 
//3.연결연산자
console.log("3.연결연산자"); 
let a3 = "1";  
let b3 = "2";  
console.log(a3+ b3);  //”12” 
 
//4.복합대입연산자 
console.log("4.복합대입연산자");
let a4 = 5;  
a4 += 10;    //+=, -=, /=, %=, *= 
console.log(a4);  //15 
 
//5.증감연산자 
console.log("5.증감연산자");
let a5 = 10;  
let b5 = a5++;     // 후치 - 뒤에서 증가  
console.log(a5);   //11 
console.log(b5);  //10

 
//6.논리연산자 
console.log("6.논리연산자");
console.log(!true);  //false 
console.log(!false);  //true 
console.log(true && true);  //true   피연산자, 연사자(&&) 개념을이해할것 
console.log(true || true);  //true   피연산자, 연사자(||) 
 
//7.비교연산자
console.log("7.비교연산자");
let compareA7 = 1 == "1";  
console.log(compareA7);  //true  자바스크립트는 = = 비교연산자는 값만 비교한다.(타입비교안함) 
 
let compareA7_2 = 1 === "1";  
console.log(compareA7_2);  //false  자바스크립트는 = = = 비교연산자는 값과 타입을 함께 비교한다. 
 
let compareA7_3 = 1 != "1";  
console.log(compareA7_3);  //false 
 
let compareA7_4 = 1 !== "1";  
console.log(compareA7_4);  //true 
 
//주의: = = 사용하지말고 = = = 사용하자. 
//주의: != 사용하지말고 != = 사용하자. 
 
let compareA7_5 = 1 > 2; //1 >= 2 
console.log(compareA7_5);  //false 
 
let compareA7_6 = 1 < 2; // 1 <= 2 
console.log(compareA7_6);  //true 
 
//8.자바스트립트 동적타입기능 
//: 타입의 유연성을제공하지만 에러를 발생할수 있는 기능임 
console.log("8.자바스트립트 동적타입기능");
let compareA8 = 1; //현재는 정수형타입
compareA8 = "1";  //정수형타입으로 선언된 변수에 문자열값을 넣어도 이상없음(동적타입기능)
console.log(compareA8)

//9.typeof 연산자 
// 값의 타입을 문자열로 반환하는 기능을 하는 연산자 
console.log("9.typeof 연산자");
let compareA9 = 1; 
console.log(typeof compareA9); //number 
compareA9 = "1"; 
console.log(typeof compareA9); //string 
 
//10. ?? (null 병합 연산자) 
//병합 연산자라고 하는데, 앞의 피연산자가 null 혹은 undefined라면 뒤 피연산자를 반환하고, 그렇지 
//않다면 앞의 피연산자를 반환한다. 즉 null, undefined 가 아닌 값을 찾아내는 연산자 
console.log("10. ?? (null 병합 연산자)");
let a10;  //undefined가 저장되어 있음. 
a10 = a10 ?? 10; //연산자(??)는 피연사자중에 null 이나 undefined 이 아닌값을 선택한다.   
console.log(a10);  //10 
 
a10 =30;   
a10 = a10 ?? 10; //연산자(??)는 피연사자중에 null 이나 undefined 이 아닌값을 선택한다.   
console.log(a10);  //30 
 
let a10_1 = null; 
let x = a10_1 ?? b3; // x = b3
 
 
//11. 삼항연산자 
// 요구사항 : 변수 res에 va11의 값이 짝수 -> "짝", 홀수 -> "홀" 
console.log("11. 삼항연산자");
let var11 = 10; 
let res = var11 % 2 === 0 ? "짝수" : "홀수"; 
console.log(res);