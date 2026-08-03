
const Main = () => {
  let number = 9;
  let obj = {name: "홍길동"};
  let arr = [1,2,3,5];
  let bool = false;
  let hobby = "게임";
  let undefinedValue;
  return(
    <main>
      <h1>안녕 리액트, 우리 친해지자.</h1>
      <h3>number = {number}</h3>
      <h3>{number % 2 === 0 ? "짝수" : "홀수"}</h3>
      {/* <h3>객체 obj = {obj}</h3> */}
      <h3>객체 obj.name = {obj.name}</h3>
      <h3>array = {arr}</h3>
      <h3>array = {arr[2]}</h3>
      <h3>boolean = {bool}</h3>
      <h3>hobby = {hobby}</h3>
      <h3>undefinedValue = {undefinedValue}</h3>
      <h3>array filter = {arr.filter((e)=> e >= 3)}</h3>
    </main>
  );
}

export default Main;