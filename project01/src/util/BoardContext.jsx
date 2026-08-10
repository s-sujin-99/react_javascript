import { createContext } from 'react';

// 게시글 목록(상태)을 하위 컴포넌트에 전달하기 위한 Context
export const BoardStateContext = createContext();
// 게시글 CRUD 함수(onCreate, onUpdate, onDelete)를 하위 컴포넌트에 전달하기 위한 Context
export const BoardDispatchContext = createContext();