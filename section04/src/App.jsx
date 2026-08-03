import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const isMount = useRef(false);

 //마운트될때, count State값이 변경이 될때마다 작동
 useEffect(() => {
 console.log(`mount isMount=${isMount.current}`);
 }, []);

 //마운트, 모든 상태값이 업데이트 될때만 작동
 //마운트 콜하는것은 막을수 없다 -> 일은 안하게 처리하자
 useEffect(()=>{
  if(isMount.current === false) {
    isMount.current = true;
    return;
  }
  console.log('update');
 });

  return (
    
    <div className="App">
      <h1>Simple Counter</h1>
      {count % 2 === 0 ? <Even/> : null}
      <section>
        <input type="text" name="desc" value={input} onChange={(e) => {setInput(e.target.value)}}/>
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickBtn = {(value) => {setCount(count + value)}} />
      </section>
    </div>
  
  );
}

export default App
