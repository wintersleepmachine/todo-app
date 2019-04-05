import React from 'react';




const TodosLeft = ({todos}) => {
    let num = 0;
    todos.forEach(todo => {
        if(!todo.completed){
            num = num + 1
        }
    })

    const message = !num ? "You currently have no todos..." : num > 1 ? `You have ${num} todos left... ` : 'You have 1 todo left...'
   
    return (
        <div>
            <h2>
                {message}            
            </h2>
        </div>
    )
}

export default TodosLeft