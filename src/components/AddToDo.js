import React from 'react';
import { useRef } from 'react';
import { addToDo } from '../actions/actions';
import { useDispatch } from 'react-redux';

export default function AddToDo() {

    let myRef1 = useRef();
    let dispatch = useDispatch();

    function addNewToDo()
    {
        const todoText = myRef1.current.value;
        const actionObj = addToDo(todoText);
        dispatch(actionObj);
    }
  return (
    <>
      <input ref={myRef1}  /> &nbsp;
      <button onClick={addNewToDo}>Add To DO</button>
    </>
  )
}
