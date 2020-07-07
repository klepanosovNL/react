import React from "react";

const TodoListItem = ({label, important = false}) => {
    const style = {
        backgroundColor: important ? 'tomato' : 'transparent'
    }
    return <span style={style}>{label}</span>
}

export default TodoListItem