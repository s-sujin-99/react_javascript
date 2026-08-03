import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
// import Main from './components/Main'
// import Section from './components/Section'
// import Section02 from './components/Section02'
// import Button from './components/Button'
import StateTest from './components/StateTest'
function App() {
  const [count, setCount] = useState(0)
  const buttonProps = {
    text : "메일",
    color : "blue",
    size : 20
  }

  return (
    <>
      <Header/>
      {/* <Main/> */}
      {/* <Section/> */}
      {/* <Section02/> */}
      {/* color, text -> properties로 결정 */}
      {/* <Button color={'red'} text={'이름'}/>
      <Button color={'green'} text={'나이'}/>
      <Button color={'yellow'} text={'취미'}/>
      <Button {...buttonProps}>
        자식요소
      </Button> */}

      <StateTest/>
      <Footer/>

    </>
  )
}

export default App
