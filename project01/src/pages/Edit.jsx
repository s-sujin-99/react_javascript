import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BoardDispatchContext, BoardStateContext } from "../util/BoardContext.jsx";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";

// 게시글 수정 페이지
const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(BoardDispatchContext);
    const data =useContext(BoardStateContext);
    const [curBoardItem, setCurBoardItem] = useState();

    // URL 파라미터(id)로 수정할 게시글을 찾아 상태에 저장
    // 존재하지 않는 id라면 알림 후 홈으로 이동
    useEffect(() => {
        const currentBoardItem = data.find((item) => String(item.id) === String(params.id));
        if (!currentBoardItem) {
            window.alert("존재하지 않는 글입니다.");
            nav("/", { replace: true });
            return;
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurBoardItem(currentBoardItem);
    }, [params.id]) // eslint-disable-line react-hooks/exhaustive-deps

    // 삭제 버튼 클릭 시 확인 후 게시글 삭제
    const onClickDelete = () => {
        if (window.confirm("작성하신 글을 정말 삭제할까요? 다시 복구되지 않아요!") ) {
            // 일기 삭제 로직
            onDelete(Number(params.id));
            //뒤로가기 방지
            nav("/", { replace: true });
        }
    }

    // Editor에서 작성완료 클릭 시 확인 후 게시글 수정
    const onSubmit = (input) => {
        if (window.confirm("내용을 정말 수정할까요?")) {
            onUpdate(
                Number(params.id),
                input.title,
                input.createdDate.getTime(),
                input.content
            )
            nav("/", {replace:true})
        }
    }

    return (

        <div>
            <Header
            title={"내용 수정하기"}
            leftChild={ <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} /> }
            rightChild={ <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} /> }
            />
            <Editor initData={curBoardItem} onSubmit={onSubmit} />
        </div>
    )
}
export default Edit;