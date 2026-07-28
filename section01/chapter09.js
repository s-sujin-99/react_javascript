// 객체 생성
// 생성자
let obj1 = new Object();
// 리터널
let obj2 = {}

// 객체 프로퍼티
let person = {
    name : "홍길동",
    age : 23,
    gender : false,
    extra : {
        ext1 : 10,
        ext2 : "str",
        ext3 : false
    },
    extra2 : function() {
        console.log(this.age);
    },
    extra3 : [1,2,3,4,5],
    "like cat" : true
}

console.log(person);
console.log(person["age"]);
console.log(person.extra.ext1);
console.log(person.extra["ext1"]);

//"like cat" : true
console.log(person["like cat"]);

//extra3 : [1,2,3,4,5]
console.log(person.extra3[1]);

console.log(person.extra2());





