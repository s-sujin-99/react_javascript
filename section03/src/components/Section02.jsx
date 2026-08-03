import "../css/Section.css";

const Section02 = () => {
  const user= {
    name : "zeus",
    isLogin : true
  };

  return(
    <>
    {/* 중괄호 표기법 */}
      {
        user.isLogin === true 
        ? <div className="logstyle"> {user.name} 로그아웃</div>
        : <div className="logstyle"> {user.name} 로그인</div>
      }
    </>
  );
}

export default Section02;