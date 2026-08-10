import "./Header.css"

// 페이지 상단 헤더 컴포넌트
// title: 중앙에 표시할 제목, leftChild/rightChild: 좌우에 배치할 버튼 등의 요소
const Header = ({title, leftChild, rightChild}) => {
    return(
        <header className="Header">
            <div className="header_left">{leftChild}</div>
            <div className="header_center">{title}</div>
            <div className="header_right">{rightChild}</div>
        </header>
    )
}

export default Header;