import Header from "../components/Header";
import Button from "../components/Button";
import BoardList from "../components/BoardList";
import { BoardStateContext } from "../util/BoardContext";
import { useContext, useState } from "react";

// 전체 게시글(data) 중 pivotDate가 속한 달(月)에 작성된 게시글만 걸러냄
const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(),1,0,0,0).getTime();
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59 ).getTime();
    return data.filter( (item) => beginTime <= item.createdDate && item.createdDate <= endTime);
}

// 홈 페이지: 월 단위로 게시글 목록을 보여주고, 이전/다음 달로 이동 가능
const Home = () => {
    const data = useContext(BoardStateContext)
    // pivotDate: 현재 화면에 표시 중인 기준 월
    const [pivotDate, setPivoDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate, data);

    // 다음 달로 이동
    const onIncreaseMonth = () => {
        setPivoDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1)
        )
    }

    // 이전 달로 이동
    const onDecreaseMonth = () => {
        setPivoDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1)
        )
    }

    return (
        <div>
           <Header
           title={`${pivotDate.getFullYear()}년 ${
            pivotDate.getMonth()+1}월`}
           leftChild={<Button onClick={onDecreaseMonth} text={"<"}/>}
           rightChild={<Button onClick={onIncreaseMonth} text={">"}/>}
           />
           <BoardList data={monthlyData}/>
        </div>
    )
}
export default Home;