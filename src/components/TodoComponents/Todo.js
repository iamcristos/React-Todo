import React from 'react'
import TodoList from './TodoList'

const Todo = (props)=>{
    return(
        <div>
            <TodoList todoList = {props.todoList} id={props.id}
                clickedList={props.clicked} completed={props.completed}/>
        </div>
    )
}

export default Todo;