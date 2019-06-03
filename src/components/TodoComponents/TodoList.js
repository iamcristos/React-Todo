// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import './Todo.css'
const TodoList = (props)=>{
    let links = null
    if (props.completed) {
        links = <li onClick={()=>props.clickedList(props.id)}><strike>{props.todoList}</strike></li>
    } else {
       links= <li onClick={()=>props.clickedList(props.id)}>{props.todoList}</li>
    }
    return (
        <div className='TodoList'>
            {links}
        </div>
    )
}

export default TodoList;