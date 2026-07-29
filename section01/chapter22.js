// 비동이 처리방식 Promise

function task(a, b, callback){
  setTimeout(() => { 
  let sum = a+b;
  callback(sum);
  console.log(2); 
  }, 1000); 
}
/* 
const promise = new Promise((resolve, reject)=>{
  setTimeout(() => { 
    console.log("Hello"); 
    // resolve("안녕");
    reject("실패");
  }, 2000); 
});

setTimeout(() => { 
  console.log(promise);
  }, 3000);
*/

// 비동기작업 성공, 실패 확인 방법
/*
const promise2 = new Promise((resolve, reject)=>{
  //비동기 작업 실행 함수
  setTimeout(()=>{
    const num = 10;
    (typeof num === 'number') ? (resolve(`${num}은 숫자입니다.`)) : reject(`${num} 숫자가 아닙니다.`);
  },2000);
});


setTimeout(()=>{
  console.log(promise2);
},3000);


promise2
.then((value)=>{
  console.log(`promise2.then = ${value}`);
})
.catch((value)=>{
  console.log(`promise2.catch = ${value}`);
});

*/

//3단계 비동기 처리 방식
function add10(num){
  const promise = new Promise((resolve, reject)=>{
  //비동기 작업 실행 함수
    setTimeout(()=>{
      (typeof num === 'number') && (num <= 20) ? (resolve(num+10)) : reject(`${num} 숫자가 아닙니다.`);
    },2000);
  });
  return promise;
}

const promise3 = add10(0);
/*
promise3.then((result)=>{
  console.log(result);
  const promise4 = add10(result);
  promise4.then((result)=>{
    console.log(result);
  });
});
*/

add10(0)
.then((result)=>{
  console.log(result);
  return add10(result);
})
.then((result)=>{
  console.log(result);
  return add10(result);
})
.then((result)=>{
  console.log(result);
  return add10(result);
})
.catch((error)=>{
  console.log(error);
});


