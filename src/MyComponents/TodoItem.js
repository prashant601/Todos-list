import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div className="todoItem">
           <h4 className=" fw-normal">{todo.title}</h4>
           <p>{todo.desc}</p>
           <button className="btn btn-sm px-3 py-2 btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
        <hr className="bg-primary"/> 
        </>
    )
}
