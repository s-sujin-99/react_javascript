import './App.css'
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef } from 'react';

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
function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  //핸들러 함수
  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone: false,
      content : content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo
      })
    )
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo)=> {
      return todo.id !== targetId;
    }))
  };

  return (
    <>
      <div className="App">
        <Header />
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
      </div>

    </>
  )
}

export default App
