import React from "react";
//importing components
import Todo from "./Todo";
const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
    <div className = "todo-container">
        <ul className = "todo-list">
           { filteredTodos.map((todo) => (
               <Todo todo = {todo} key = {todo.id} text = {todo.text} todos = {todos} setTodos = {setTodos}/>
           ))}
        </ul>
    </div>
    );
}

export default TodoList;