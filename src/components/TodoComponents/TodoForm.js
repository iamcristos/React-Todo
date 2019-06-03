import React from 'react'

const style = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
}

const btnStyle = {
    width: '80px',
    padding: '.3rem',
    outline: 'none',
    height: '30px'
}
const TodoForm = (props)=>{
    return (
        <div style={style}>
            <form onSubmit={(e)=> (
                e.preventDefault()
            )
            }>
                <input type='text' style={{'margin':'1rem', 'outline':'none'}}
                    onChange={props.onChange}/>
                <button onClick={props.clickedAdd} style={btnStyle}>Add Todo</button>
            </form>
            <div style={{marginTop:'.6rem', marginLeft:'0rem'}}>
                <button onClick={props.clickedClear} style={btnStyle}>Clear Todo</button>
            </div>
        </div>
    )
}

export default TodoForm;