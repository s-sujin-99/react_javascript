
//3단계 비동기 처리 방식
function food(choiceFood, flag){
  const promise = new Promise((resolve, reject)=>{
  //비동기 작업 실행 함수
    setTimeout(()=>{
      (flag === true) ? (resolve(`${choiceFood}이가 나왔습니다.`)) : reject(`${choiceFood} 음식이 아닙니다.`);
    },2000);
  });
  return promise;
}

// async() -> 비동기식 
// 함수가 비동기식 함수로 처리
// 리턴값을 promise 준다
async function getData(flag){
  if(flag === true) {
    return {
      name : 'zeus',
      age : 30
    };
  } else {
    return new Error('객체가 없습니다.');
  }
}
/*
getData(true)
.then((result)=>{
  console.log(result);
})
.catch((result)=>{
  console.log(result);
});
*/

async function printDate() {
  const result = await getData(true);
  console.log(result);
}

printDate();



