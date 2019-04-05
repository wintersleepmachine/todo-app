import React from 'react'
import TodoList from './TodoList'
import TodosLeft from './TodosLeft'
import './../styles/styles.css'

class App extends React.Component{
    state = {
        text: '',
        todos: [{todo: "Buy groceries", completed: false}, {todo: 'Walk the dog', completed: true}, {todo: 'Mow the lawn', completed: false}],
        error: false
    }
    
    handleChange = (e) => {
        this.setState({text: e.target.value})
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(!this.state.text){
           this.setState({
               error: true
           })

           console.log(this.state.error)
        }else {
            this.setState({text: '', todos: [...this.state.todos, {todo: this.state.text, completed: false}], error: false})
        }
        
    }

    handleClick = (todo) => {
       this.setState({
           todos: this.state.todos.map(item => {
               if(item.todo === todo.todo){
                   todo.completed = !todo.completed
               }

               return item
           })
       })
        
    }
    
    handleDelete = (todo) => {
        this.setState({
            todos: this.state.todos.filter(item => {
                if(todo.todo !== item.todo){
                    return item
                }
            })
        })
 
    }

  

    render(){
        return (
            <div className = 'background'>
                <div className = 'ui container'>
                        <p style = {{textAlign: 'center', marginTop: '50px', fontSize: '20px'}}>
                            <strong>Add todos below! Click on the text to cross off and mark as completed or click the trash icon to delete the todo.</strong>
                        </p>
                    <div className = 'ui container form'>
                            <form onSubmit = {this.handleSubmit}>
                                <input className = 'ui input' type="text" placeholder = "Add a todo..." value = {this.state.text} onChange = {this.handleChange}/>
                                <button className = 'ui primary button'>Submit</button>
                            </form>
                            <div style={{textAlign: 'center'}}>
                                <TodosLeft todos ={this.state.todos} />
                            </div>
                            <div>
                                <TodoList todos={this.state.todos} handleClick = {this.handleClick} handleDelete = {this.handleDelete} />
                            </div>
                     </div>
                </div>
            </div>
                
        )
    }
}

export default App
