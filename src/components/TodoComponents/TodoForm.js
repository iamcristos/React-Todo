import React from 'react'

const TodoForm = (props)=>{
    return (
        <div>
            <input type='text' 
                onChange={props.onChange}/>
            <button onClick={props.clickedAdd}>Add Todo</button>
            <button onClick={props.clickedClear}>Clear Completed</button>
        </div>
    )
}

export default TodoForm;