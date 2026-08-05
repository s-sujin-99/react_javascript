import './App.css'
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react';
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

// export const TodoContext = createContext();
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

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
  
  //딱 한번만 실행
  const memoizedDispatch = useMemo(()=>{
    return {onCreate, onUpdate, onDelete};
  },[onCreate, onDelete, onUpdate]);

  return (
    <>
      <div className="App">
        <Header />
        <TodoStateContext.Provider
        value={{todos}}>
          <TodoDispatchContext.Provider value={memoizedDispatch}>
            <Editor />
            <List />
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </div>

    </>
  );
}

export default App
