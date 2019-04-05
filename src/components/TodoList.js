import React from 'react'
import './../styles/styles.css'

class TodoList extends React.Component {

    strikeThrough = (todo) => {
        const style = {textAlign: 'left', position: 'absolute', verticalAlign: 'middle'}

        if(todo.completed){
            style.textDecoration = 'line-through'
            style.textDecorationStyle = 'double'

        }

        return style
    }

   render(){
    const list = this.props.todos.map((todo, index) => {
        return (
                <div className='ui raised very padded text container segment' key={index} style = {{cursor: 'pointer'}}>
                    
                        <h1 onClick = {() => this.props.handleClick(todo)} style = {this.strikeThrough(todo)}>{todo.todo}</h1>
                        <button 
                            className = 'bounce ui right floated red circular button' 
                            onClick ={() => this.props.handleDelete(todo)} 
                            style={{cursor:'pointer'}}>
                                <i className="icon trash alternate outline icon" />
                            </button>
                        
                </div>
        )
    })

    return (
        <div>
            {list}
        </div>
        
    )
   }
    
}

export default TodoList