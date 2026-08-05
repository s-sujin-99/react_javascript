import '../TodoItem.css';
import { memo, useContext } from 'react';
import { TodoDispatchContext } from '../App';

const TodoItem = ({id, isDone, content, date}) => {
  const {onUpdate, onDelete} = useContext(TodoDispatchContext);
  
  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
 <div className='TodoItem'>
    <input onChange={onChangeCheckBox} checked={isDone} type="checkbox" />
    <div className='content'>{content}</div>
    <div className='date'>
      {new Date(date).toLocaleDateString()}
    </div>
    <button onClick={onClickDeleteButton}>삭제</button>
 </div>
 );
};
export default memo(TodoItem);
//이렇게 했는데도 모두 TodoItem 이 랜더링이 진행
//onUpdate, onDelete 랜더링이 될때마다 새로 만들어지기 때문에 주소로 비교하기 때문
//memo 컴포넌트를 고차 컴포넌트 (HOC) : Higher order Component 
/* 
export default memo(TodoItem, (prevProps,nextProps) => {
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
})
*/