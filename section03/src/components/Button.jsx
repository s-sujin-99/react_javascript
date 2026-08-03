
const Button = ({color = 'black', text= 'zeus', size, children}) => {
  // event 함수
  const onClickButton = (e) => {
    alert(text);
  }


  return(
    <>
      <button onClick={onClickButton} 
      style={{color : color, width : "200px", margin : "0 auto", fontSize :size}}>
        {text} {size} {children}
      </button>
    </>
  );
}

export default Button;