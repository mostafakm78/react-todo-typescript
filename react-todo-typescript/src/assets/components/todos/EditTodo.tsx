import React, { Dispatch, SetStateAction, useState } from "react";
import todo from "../../models/todo";

interface props {
    todo : todo
    edittodo : (id : number , value : string) => void
    seteditstatus : Dispatch<SetStateAction<boolean>>
}


const EditTodo : React.FC<props> = ({todo , edittodo , seteditstatus}) => {
    const [input , setInput] = useState<string>(todo.title)

    const inputHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const submitChange = (e : React.FormEvent) => {
        e.preventDefault()

        if (input !== "") {
            edittodo(todo.id , input)
            setInput("")
            seteditstatus(false)
        }
    }

    return (
        <form onSubmit={submitChange} className="col-6 mb-2">
        <div className="d-flex justify-content-between align-items-center border rounded p-3">
            <div>
                <input type="text" value={input} onChange={inputHandler} />
            </div>
            <div>
                <button type="submit" className="btn btn-info btn-sm">edit</button>
            </div>
        </div>
        </form>
    )
}


export default EditTodo
