import { useEffect } from "react";
function Even() {
  //마운트, 언마운트 될때 작동
  useEffect(()=>{
    //마운트 될때 콜업
    console.log(`Even mount`);
    
    //언마운트될때 콜업
    return()=>{
      console.log(`Even unmount`);
    };
  });
  return (
    <>
      <div>
        <h1>짝수입니다.</h1>
      </div>
    </>
  );
};

export default Even;