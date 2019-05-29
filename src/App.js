import React from 'react';
import uuid from 'uuid';
import Todo from './components/TodoComponents/Todo'
import TodoForm from './components/TodoComponents/TodoForm'
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
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super(props)
    this.state = {
      todoItem : todoData,
    }
  }

  onChangeHandler = (e)=>{
    this.setState({todo: e.target.value})
  }

  addTodo = ()=>{
    const todoItem = [...this.state.todoItem];
    const todo = {task:this.state.todo, id:uuid(), completed:false};
    todoItem.push(todo);
    this.setState({todoItem:todoItem})
  }

  completeTodo = (e)=>{
    const todos = [...this.state.todoItem]
   // eslint-disable-next-line array-callback-return
   todos.find(todo => {
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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {this.state.todoItem.map(todo=>(
          <Todo key={todo.id} todoList={todo.task}
            clicked={this.completeTodo} id={todo.id}
            completed={todo.completed}
          />
        ))}
        

        <TodoForm onChange={this.onChangeHandler} 
          clickedAdd={this.addTodo}
          clickedClear={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
