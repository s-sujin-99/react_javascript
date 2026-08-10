import Header from '../components/Header.jsx'
import Button from '../components/Button.jsx'
import Editor from '../components/Editor.jsx'
import { useContext } from 'react'
import { BoardDispatchContext } from '../util/BoardContext.jsx'
import { useNavigate } from 'react-router-dom'

// 새 게시글을 작성하는 페이지
const New = () => {
    const {onCreate} = useContext(BoardDispatchContext)
    const nav = useNavigate()

    // Editor에서 작성 완료 시 호출: 새 게시글 생성 후 홈으로 이동
    const onSubmit = (input) => {
        onCreate(
            input.title,
            input.createdDate.getTime(),
            input.content
        )
        nav("/", {replace:true})
    }

    return (
        <div>
            <Header
            title={"새글 쓰기"}
            leftChild={
            <Button onClick={()=>nav(-1)} text={"< 뒤로가기"}/>}
            />
            <Editor onSubmit={onSubmit}/>
        </div>
    )
}
export default New;