import { useState, useReducer, useRef, createContext } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Diary from './pages/Diary.jsx'
import New from './pages/New.jsx'
import Edit from './pages/Edit.jsx'
import Button from './components/Button.jsx'
import Header from './components/Header.jsx'
import Notfount from './pages/Notfound.jsx'
import emotion1 from './assets/emotion1.png'
import emotion2 from './assets/emotion2.png'
import emotion3 from './assets/emotion3.png'
import emotion4 from './assets/emotion4.png'
import emotion5 from './assets/emotion5.png'

import { getEmotionImage } from './util/get-emotion-image.js'

const mockData = [
 {
 id: 1,
 createdDate: new Date().getTime(), 
 emotionId: 1,
 content: "1번 일기 내용",
 },
 {
 id: 2,
 createdDate: new Date().getTime(),
 emotionId: 2,
 content: "2번 일기 내용",
 },
 {
 id: 3,
 createdDate: new Date().getTime(), 
 emotionId: 3,
 content: "3번 일기 내용",
 }
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => 
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter(
        (item) => String(item.id) !== String(action.data.id)
      );
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const nav = useNavigate();
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  const onCreate = (createdDate, emotionId, content) =>{
    dispatch({
      type : "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  }

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content
      }
    })
  }

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
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete
          }}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new/*" element={<New/>}/>
            <Route path="/diary/:id" element={<Diary/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="*" element={<Notfount/>}/>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App;