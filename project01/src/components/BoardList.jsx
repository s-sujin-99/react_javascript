import "./BoardList.css";
import Button from "./Button";
import BoardItem from "./BoardItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// 게시글 목록을 정렬 옵션과 함께 보여주는 컴포넌트
const BoardList = ({data}) => {
    const nav = useNavigate();
    // 정렬 기준: "latest"(최신순) 또는 "oldest"(오래된순)
    const [sortType, setSortType] = useState("latest")

    // select 박스에서 정렬 기준이 바뀔 때 상태 갱신
    const onChangeSortType = (e) => {
        setSortType(e.target.value)
    }

    // 원본 data를 변경하지 않도록 복사한 뒤 정렬 기준에 맞게 정렬된 배열 반환
    const getSortedData = () => {
        const copyList = [...data];
        return copyList.toSorted((a,b) => {
            if (sortType === "oldest") {
                return Number(a.createdDate) - Number(b.createdDate);
            } else {
                return Number(b.createdDate) - Number(a.createdDate);
            }
        })
    }

    const sortedData = getSortedData();

    return (
        <div className="BoardList">
            <div className="menu_bar">
                <select value={sortType} onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button
                onClick={()=>nav("/new")}
                text={"새 글 쓰기"}
                type={"POSITIVE"} />
            </div>
            <div className="list_wrapper">
                {/* 정렬된 게시글 목록을 BoardItem으로 렌더링 */}
                {sortedData.map((item)=>{
                    return <BoardItem key={item.id} {...item}/>
                })}
            </div>
        </div>
    );
};
export default BoardList;