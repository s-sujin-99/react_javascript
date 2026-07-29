//require(url) -> 외부 모듈 가져오기
// const moduleDate = require('./src/math')
// import add from './src/math.js'; //-> 객체로 받기
// import * as moduleDate from './src/math.js';
import multiply,{add, sub} from './src/math.js';
import randomColor from 'randomcolor';

//randomColor를 사용해 색상을 얻는다
const color = randomColor();
console.log(`randomColor() = ${color}`);

/*
// 외부 모듈에 있는 함수 가져와 사용
console.log(add(1,2));
console.log(sub(1,2));
console.log(multiply(2,3));
*/
