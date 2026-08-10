import "./Button.css"

// 공용 버튼 컴포넌트
// type 값(POSITIVE, NEGATIVE 등)에 따라 className이 달라져 버튼 스타일이 구분됨
const Button = ({text, type, onClick}) => {
    return (
        <button onClick={onClick}
        className={`Button Button_${type}`}>
            {text}
        </button>
    )
}
export default Button;