import React from 'react'

const searchTodo = (props)=>{
    return (
        <div>
            <label> Search Todo</label>
            <input type='text' onChange={props.search}/>
    </div>
    )
}

export default searchTodo;