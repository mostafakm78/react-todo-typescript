import React, { useState } from "react";
import todo from "../../models/todo";
import EditTodo from "./EditTodo";

interface props {
    todo : todo
    deletetodo : ( id : number ) => void
    edittodo : ( id : number , value : string) => void
    ToggleTodo : ( id : number ) => void
}


const TodoItem : React.FC<props> = ({ todo , deletetodo , edittodo , ToggleTodo }) => {
    const [editstatus , setEditsatuts ] = useState<boolean>(false)


    return (
        ! editstatus
        ? <div className="col-6 mb-2">
        <div className="d-flex justify-content-between align-items-center border rounded p-3">
            <div onClick={() => ToggleTodo(todo.id)} style={{textDecoration : todo.is_done ? 'line-through' : 'none'}}>
                {todo.title}
            </div>
            <div>
                <button type="button" onClick={() => {setEditsatuts(true)}} className="btn btn-info btn-sm">edit</button>
                <button type="button" onClick={() =>deletetodo(todo.id)} className="btn btn-danger btn-sm ml-2">delete</button>
            </div>
        </div>
    </div>
    : <EditTodo todo={todo} edittodo={edittodo} seteditstatus={setEditsatuts}/>
    )
}


export default TodoItem;
