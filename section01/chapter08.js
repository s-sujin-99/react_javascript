// 전역변수, 지역변수
let a = 1;

function functionA(){
    let b = 2;
    console.log(a);
}
functionA();
// console.log(b);     //접근불가

//모든 블럭안에 있는 변수, 매개변수 - 지역변수
if(true){
    let c = 10;
    console.log(c);      
}
console.log(c);      //접근불가

for (let index = 0; index < 2; index++) {
    let d = 1;
    d += index;
}
console.log(d);     //접근불가
console.log(index);     //접근불가


