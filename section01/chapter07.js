// 콜백 함수
function checkMood(mood, goodCallback, badCallback){
    if(mood === "good"){
        // sing()
        // dancing()
        goodCallback()
    } else {
        // cry()
        badCallback()
    }
}

checkMood("good",() => console.log("노래를 부릅니다.") ,() => console.log("노래를 못해 웁니다."));

// 함수 선언문
/*
function sing(){
    console.log("노래를 부릅니다.");
}

function cry(){
    console.log("노래를 못해 웁니다.");
}

function dancing(){
    console.log("춤을 춥니다.");
}
*/

// 콜백함수 응용
function repeat(count, callBack){
    for (let index = 0; index < count; index++) {
        callBack(index);
    }
}
repeat(5, (idx)=> console.log("화이팅~!"+idx));
