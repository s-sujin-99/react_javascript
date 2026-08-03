import { useState } from 'react'

function StateTest() {
  const [light, setLight] = useState('OFF')
  
  const onClickOnOff=(e)=>{
    setLight(light === 'ON' ? 'OFF' : 'ON'); 
  }

  return (
    <>
      <div>
        <h1>전구 상태 : {light}</h1>
        <button onClick={onClickOnOff}>{light === 'ON'? 'ON' : 'OFF'}</button>
      </div>
    </>
  )
}

export default StateTest
