// 함수 호이스팅 기능
// 함수 선언문에서만 작동 (함수 표현식 x)

// console.log(helloA());
console.log(helloB());
// console.log(helloC());

let helloA  = function (){
    return "함수 표현식에 익명함수"
}

let helloC  = () => {
    return "함수 표현식에 화살표함수"
}

function helloB (){
    return "함수 선언문 함수"
}
