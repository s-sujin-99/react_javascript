import {  useReducer, useRef } from 'react';
import {Routes,Route} from 'react-router-dom'

import Home from './pages/Home.jsx';
import Edit from './pages/Edit.jsx';
import Board from './pages/Board.jsx';
import New from './pages/New.jsx';
import Notfound from './pages/Notfound.jsx';
import './App.css'
import { BoardDispatchContext, BoardStateContext } from './util/BoardContext.jsx';

// 초기 목업(mock) 게시글 데이터
const mockData = [
 {
 id: 1,
 title: "게시글 제목 1",
 createdDate: new Date().getTime(),
 content: "게시판 내용 1",
 },
 {
 id: 2,
 title: "게시글 제목 2",
 createdDate: new Date().getTime(),
 content: "게시판 내용 2",
 },
 {
 id: 3,
 title: "게시글 제목 3",
 createdDate: new Date().getTime(),
 content: "게시판 내용 3",
 }
];

// 게시글 목록 상태를 관리하는 reducer
// action.type에 따라 게시글 생성(CREATE), 수정(UPDATE), 삭제(DELETE) 처리
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      // 새 게시글을 배열 맨 앞에 추가
      return [action.data, ...state];
    case "UPDATE":
      // id가 일치하는 게시글만 새 데이터로 교체
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      // id가 일치하는 게시글을 제외한 나머지만 반환
      return state.filter(
        (item) => String(item.id) !== String(action.data.id)
      );
    default:
      return state;
  }
}


// 앱의 최상위 컴포넌트
// 게시글 상태(useReducer)를 관리하고, Context를 통해 하위 컴포넌트에 상태/함수를 전달하며
// react-router-dom으로 페이지별 라우팅을 설정
function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  // 새 게시글에 부여할 다음 id를 추적 (mockData 다음 값인 4부터 시작)
  const idRef = useRef(4);

  // 게시글 생성: 새 id를 발급하고 CREATE 액션 dispatch
  const onCreate = (title, createdDate, content) =>{
    dispatch({
      type : "CREATE",
      data: {
        id: idRef.current++,
        title,
        createdDate,
        content
      }
    })
  }

  // 게시글 수정: UPDATE 액션 dispatch
  const onUpdate = (id, title, createdDate, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        title,
        createdDate,
        content
      }
    })
  }

  // 게시글 삭제: DELETE 액션 dispatch
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: {
        id
      }
    })
  }

  return (
    <>
      {/* 게시글 목록 상태를 하위 트리 전체에 제공 */}
      <BoardStateContext.Provider value={data}>
        {/* 게시글 CRUD 함수들을 하위 트리 전체에 제공 */}
        <BoardDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete
          }}>
          {/* 경로별 페이지 라우팅 설정 */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new/*" element={<New/>}/>
            <Route path="/board/:id" element={<Board/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="*" element={<Notfound/>}/>
          </Routes>
        </BoardDispatchContext.Provider>
      </BoardStateContext.Provider>
    </>
  )
}

export default App
