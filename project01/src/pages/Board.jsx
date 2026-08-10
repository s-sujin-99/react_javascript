import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { useContext, useEffect, useState } from "react";
import { BoardStateContext } from "../util/BoardContext";
import { getStringedDate } from "../util/get-stringed-date";
import "./Board.css";

// 게시글 상세보기 페이지
const Board = () => {
  const params = useParams();
  const nav = useNavigate();

  const data = useContext(BoardStateContext);
  const [curBoardItem, setCurBoardItem] = useState();

  const [commentInput, setCommentInput] = useState("");

  // 1. localStorage에서 해당 게시글(params.id)의 댓글 데이터를 불러오는 초기값 설정
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem(`comments_${params.id}`);
    return savedComments ? JSON.parse(savedComments) : [];
  });

  // 게시글 정보 조회
  useEffect(() => {
    const currentBoardItem = data.find(
      (item) => String(item.id) === String(params.id)
    );
    if (!currentBoardItem) {
      window.alert("존재하지 않은 글입니다.");
      nav("/", { replace: true });
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurBoardItem(currentBoardItem);
    }
  }, [params.id, data, nav]);

  // 2. 게시글 id가 변경될 때마다 해당 게시글의 댓글 데이터를 다시 로드
  useEffect(() => {
    const savedComments = localStorage.getItem(`comments_${params.id}`);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setComments(savedComments ? JSON.parse(savedComments) : []);
  }, [params.id]);

  // 3. 댓글 상태가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem(`comments_${params.id}`, JSON.stringify(comments));
  }, [comments, params.id]);

  // 댓글 등록 함수
  const onSubmitComment = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) {
      alert("댓글 내용을 입력해 주세요!");
      return;
    }

    const newComment = {
      id: Date.now(),
      content: commentInput,
      createdDate: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setComments((prevComments) => [newComment, ...prevComments]); // 최신 댓글이 위에 오도록 추가
    setCommentInput("");
  };

  // 댓글 삭제 함수
  const onDeleteComment = (targetId) => {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      setComments((prevComments) => prevComments.filter((item) => item.id !== targetId));
    }
  };

  if (!curBoardItem) {
    return <div>데이터 로딩중...</div>;
  }

  const { title, createdDate, content } = curBoardItem;
  const dateString = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={title || `${dateString} 기록`}
        leftChild={
          <Button onClick={() => nav(-1)} text={"< 뒤로가기"} />
        }
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <div className="board-date">{dateString}</div>
      <Viewer content={content} />

      <section className="comment-section">
        <h3>댓글 ({comments.length})</h3>

        <form onSubmit={onSubmitComment} className="comment-form">
          <input
            className="comment-input"
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="댓글을 작성해 보세요..."
          />
          <Button text={"등록"} type={"POSITIVE"} />
        </form>

        <div className="comment-list">
          {comments.length === 0 ? (
            <p className="comment-empty">등록된 댓글이 없습니다.</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="comment-item">
                <div className="comment-content-box">
                  <p>{comment.content}</p>
                  <span className="comment-date">{comment.createdDate}</span>
                </div>
                <button
                  className="comment-delete-btn"
                  onClick={() => onDeleteComment(comment.id)}
                >
                  삭제
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Board;