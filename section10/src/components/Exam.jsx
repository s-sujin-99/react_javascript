import { act, useReducer, useState } from "react";

// reducer : 변환기 -> 상태를 실제로 변환
function reducer (count, action){
    switch (action.type) {
        case "PLUS":
            return count + action.data;
            
        case "MINUS":
            return count - action.data;
                
        default:
            return count;
    }
}

const Exam = () => {
    // const [count, setCount] =useState(0);
    const [count, dispatch] = useReducer(reducer,0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{
                //setCount(count +1);
                dispatch({type: "PLUS", data: 1})
            }}>+</button>
            <button onClick={()=>{
                //setCount(count -1);
                dispatch({type: "MINUS", data: 1})
            }}>-</button>
        </div>
    );
};

export default Exam;
