import React from 'react';
import uuid from 'uuid';
import './App.css'
import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm'
import SearchTodo from './components/TodoComponents/searchTodo'
const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

window.localStorage.setItem('todoData', JSON.stringify(todoData));
const getTodoData= window.localStorage.getItem('todoData');

console.log(getTodoData)
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props)
    this.state = {
      todoItem : JSON.parse(getTodoData),
      todo : '',
      searchTodo : '',
      displaySearch: []
    }
  }

  onChangeHandler = (e)=>{
    this.setState({todo: e.target.value})
  }

  addTodo = ()=>{
    const todoItem = [...this.state.todoItem];
    if (this.state.todo.trim(' ') !== '') {
      const todo = {task:this.state.todo, id:uuid(), completed:false};
      todoItem.push(todo);
      this.setState({todoItem:todoItem})
    }
  }

  completeTodo = (e)=>{
    const todos = [...this.state.todoItem]
   todos.forEach(todo => {
     if(todo.id === e) {
     todo.completed !== true ? todo.completed=true : todo.completed = false
     }
  })
    this.setState({todoItem:todos})

  }

  clearTodo = ()=>{
    const todos = [...this.state.todoItem];
    const newTodo= todos.filter(todo=>todo.completed === false)
    this.setState({todoItem:newTodo})
  }

  searchHandler = (e)=>{
    const value = e.target.value;
    this.setState({searchTodo: value},()=>{
    const todoSearch = this.state.searchTodo.toLowerCase()
    const todoList = [...this.state.todoItem]
    const items = todoList.filter(todo=>todo.task.toLowerCase().includes(todoSearch) )
    this.setState({displaySearch:items})
    })
  }

  render() {
    let showTodo = null;
    this.state.searchTodo !== '' ? showTodo = this.state.displaySearch
      : showTodo = this.state.todoItem
    return (
      <div className='TodoApp'>
        <div className='todo-header'>
          <h2>Welcome to your Todo App!</h2>
          <SearchTodo  search={this.searchHandler}/>
        </div>
        <div className='Todo'>
            {showTodo.map(todo=>(
              <Todo key={todo.id} todoList={todo.task}
                clicked={this.completeTodo} id={todo.id}
                completed={todo.completed}
              />
            ))}
         </div>
        <TodoForm onChange={this.onChangeHandler} 
          clickedAdd={this.addTodo}
          clickedClear={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
