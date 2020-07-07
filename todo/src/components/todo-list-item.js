import React from "react";
import './todo-list-item.css'

const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'tomato' : 'black'
    }
    return (
        <div className="todo-list-item">
            <span className="todo-list-item-label" style={style}>{label}</span>
            <button className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o"></i>
            </button>
            <button className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"></i>
            </button>
        </div>
    )
}

export default TodoListItem