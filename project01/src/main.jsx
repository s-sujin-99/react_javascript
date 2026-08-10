
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// 앱의 진입점: root DOM 노드에 App 컴포넌트를 렌더링
// BrowserRouter로 감싸서 react-router-dom의 라우팅 기능을 앱 전체에서 사용할 수 있게 함
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
