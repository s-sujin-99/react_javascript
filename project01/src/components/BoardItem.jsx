import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./BoardItem.css";

// 게시글 목록에서 게시글 하나를 카드 형태로 보여주는 컴포넌트
const BoardItem = ({id, title, createdDate}) => {
    const nav = useNavigate();

    // 게시글 상세보기 페이지로 이동
    const goBoardPage = () => {
        nav(`/board/${id}`)
    }

    // 게시글 수정 페이지로 이동
    const goEditPage = () => {
        nav(`/edit/${id}`)
    }
    return (
        <div className="BoardItem">

            <div onClick={goBoardPage} className="info_section">
                <div className="created_date">
                    {new Date(createdDate).toLocaleDateString()}
                </div>
                <div className="title">{title}</div>
            </div>
            <div className="button_section">
                <Button onClick={goEditPage} text={"수정하기"} />
            </div>
        </div>
    );
};
export default BoardItem;