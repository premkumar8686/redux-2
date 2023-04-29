import React from 'react';
import { deleteTodo } from '../actions/actions';
import { useDispatch } from 'react-redux';


export default function ToDo(props) {

  let dispatch = useDispatch();

  function deleteMyTodo(id)
  {
    let deleteMyTodo = deleteTodo(id);
    dispatch(deleteMyTodo);
  }

  return (
    <>
      <li >{props.toDo.text} 
           <button onClick={()=>{deleteMyTodo(props.toDo.id)}}>Delete</button>
      </li>
    </>
  )
}
