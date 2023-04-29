import React from 'react'
import { useSelector } from 'react-redux'
import ToDo from './ToDo';

export default function ToDoList() {
  let myTodos = useSelector((state)=> state.todosReducer);
  return (
    <>
    <ul>
      {myTodos.map((toDo)=>{
       return  <ToDo toDo={toDo} key={toDo.id} />
      })}
    </ul>
    </>
  )
}
