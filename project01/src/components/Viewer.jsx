import "./Viewer.css"

// 게시글 상세 내용을 읽기 전용으로 보여주는 컴포넌트
const Viewer = ({ content}) => {


    return (
        <div className="Viewer">
            <section className="content_section">
                <h4>게시판</h4>
                <div className="content_wrapper">
                    <p>{content}</p>
                </div>
            </section>
        </div>
    )
}
export default Viewer;