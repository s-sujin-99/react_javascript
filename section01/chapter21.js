//1. 비동기식 프로그램 실행
/* 
console.log(1); 
//비동기로 처리한 방식(Web APIs 에서 실행된다) 
task(10,20,(sum) => console.log(sum));
console.log(3); 

//함수 선언식
function task(a, b, callback){
  setTimeout(() => { 
  let sum = a+b;
  callback(sum);
  console.log(2); 
  }, 1000); 
}
*/

//2. 비동식 음식 주문 프로그램

function orderFood(food, callback){
  console.log(`서버에 음식 주문해 주세요 : ${food}`);
  setTimeout(()=>{
    callback(food);
  },2000);
}

// orderFood('백숙', (food) => console.log(`${food} 조리가 완료했습니다.`));

//3. 비동기 방식 - 음식 온도 설정
function coolFood(food, callback){
 console.log(`서버 음식을 차게 해주세요 : ${food}`);
  setTimeout(()=>{
    callback(food);
  },2000);
}

// coolFood('뜨거운백숙', (food) => console.log(`${food} 차갑게 조리를 완료했습니다.`));


//4. 비동기 방식 - 음식 포장
function toGoFood(food, callback) {
  console.log(`서버 음식을 포장해주세요 : ${food}`);
  setTimeout(()=>{
    callback(food);
  },2000);
}

// toGoFood('백숙', (food) => console.log(`${food} 포장을 완료했습니다.`))


//5. 비동기 방식 - 나온 음식을 차갑게 
/*
orderFood('백숙', (food) => {
  console.log(`${food} 조리가 완료했습니다.`)
  coolFood('뜨거운백숙', (food) => console.log(`${food} 차갑게 조리를 완료했습니다.`));
});
 */

//6. 비동기 방식 - 나온 음식을 차갑게 한후 포장
orderFood('백숙', (food) => {
  console.log(`${food} 조리가 완료했습니다.`)
  coolFood('뜨거운백숙', (food) => console.log(`${food} 차갑게 조리를 완료했습니다.`));
  toGoFood('차가운백숙', (food) => console.log(`${food} 포장을 완료했습니다.`))
});

