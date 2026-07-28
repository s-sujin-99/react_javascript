// JSON.stringfy -> json 방식을 string 형식으로 비교
let object1 = {
  name : "제우스",
  age : 40
};

let object2 = {
  ...object1
};

(object1 === object2) ? console.log("얕은 복사") : console.log("깊은 복사");

console.log(JSON.stringify(object1) + "문자열");

(JSON.stringify(object1) === JSON.stringify(object2)) ? console.log("같은 내용") : console.log("다른 내용");




