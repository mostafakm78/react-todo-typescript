import React from "react";
import todo from "../../models/todo";

interface props {
    todo : todo
}


const TodoItem : React.FC<props> = ({ todo }) => {
    return (
        <div className="col-6 mb-2">
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                    {todo.title}
                </div>
                <div>
                    <button type="button" className="btn btn-info btn-sm">edit</button>
                    <button type="button" className="btn btn-danger btn-sm ml-1">delete</button>
                </div>
            </div>
        </div>
    )
}


export default TodoItem;
