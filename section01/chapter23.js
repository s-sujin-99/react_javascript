
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

function coolFood(choiceFood, flag){
  const promise = new Promise((resolve, reject)=>{
  //비동기 작업 실행 함수
    setTimeout(()=>{
      (flag === true) ? (resolve(`${choiceFood}이가 차갑게 나왔습니다.`)) : reject(`${choiceFood} 음식이 아닙니다.`);
    },2000);
  });
  return promise;
}

function freezeFood(choiceFood, flag){
  const promise = new Promise((resolve, reject)=>{
  //비동기 작업 실행 함수
    setTimeout(()=>{
      (flag === true) ? (resolve(`${choiceFood}이가 냉동하여 나왔습니다.`)) : reject(`${choiceFood} 음식이 아닙니다.`);
    },2000);
  });
  return promise;
}

food("뜨거운 백숙", true)
.then((result)=>{
  console.log(result); 
  return coolFood("차가운 백숙", true); 
})
.then((result)=>{
  console.log(result); 
  return freezeFood("얼린 백숙", true); 
})
.then((result)=>{
  console.log(result); 
})
.catch((error)=>{
  console.log(error);
});
