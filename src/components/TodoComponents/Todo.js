import React from 'react'
import TodoList from './TodoList'
import './Todo.css'
const Todo = (props)=>{
    return(
         <TodoList todoList = {props.todoList} id={props.id}
            clickedList={props.clicked} completed={props.completed}/>
    )
}

export default Todo;