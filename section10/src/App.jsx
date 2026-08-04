import './App.css'
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef, useReducer, useCallback } from 'react';
import Exam from './components/Exam';

  const mockData =[
    {
      id:0, 
      isDone:false,
      content:"react 공부하기",
      date: new Date().getTime(),
    },
    {
      id:1, 
      isDone:false,
      content:"빨래하기",
      date: new Date().getTime(),
    },
    {
      id:2, 
      isDone:false,
      content:"노래 연습하기",
      date: new Date().getTime(),
    },
  ];

function reducer(todos, action){
  switch (action.type) {
    case "CREATE":
      return [action.data, ...todos];
    case "UPDATE":
      return todos.map((todo) => {
        return todo.id === action.targetId ? 
        {...todo, isDone: !todo.isDone} 
        : todo
      });
    case "DELETE":
      return todos.filter((todo)=> {
        return todo.id !== action.targetId;
    });
    default:
      return todos;
  }
}

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  //핸들러 함수
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id : idRef.current++,
        isDone: false,
        content : content,
        date: new Date().getTime(),
      },
    });
  },[]);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type :"UPDATE",
      targetId : targetId
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    });
  },[]);

  return (
    <>
      <div className="App">
        <Header />
        {/* <Exam/> */}
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
      </div>

    </>
  )
}

export default App
