import "./Editor.css";
import Button from "./Button.jsx";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

const getStringDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;

  return `${year}-${month}-${date}`;
};

const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    title: "",
    createdDate: new Date(),
    content: ""
  });

  // 1. 이전 initData를 기억하기 위한 상태
  const [prevInitData, setPrevInitData] = useState(null);

  // 2. initData가 변경되었을 때 렌더링 과정에서 동기적으로 input 업데이트
  if (initData !== prevInitData) {
    setPrevInitData(initData);
    if (initData) {
      setInput({
        ...initData,
        title: initData.title || "",
        createdDate: new Date(Number(initData.createdDate))
      });
    }
  }

  const nav = useNavigate();

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value
    });
  };

  const onSubmitButtonClick = () => {
    if (!input.title.trim()) {
      alert("제목을 입력해 주세요!");
      return;
    }
    if (!input.content.trim()) {
      alert("내용을 입력해 주세요!");
      return;
    }
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="title_section">
        <h4>게시글 제목</h4>
        <input
          name="title"
          value={input.title}
          onChange={onChangeInput}
          placeholder="제목을 입력해 주세요..."
          className="title_input"
        />
      </section>

      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringDate(input.createdDate)}
          type="date"
        />
      </section>

      <section className="content_section">
        <h4>게시판 내용</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="내용을 적어주세요.."
        />
      </section>

      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onSubmitButtonClick}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;