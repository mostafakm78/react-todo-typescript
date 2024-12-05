import React, { Dispatch, SetStateAction, useState } from "react";
import todo from "../../models/todo";


interface props {
    add : Dispatch<SetStateAction<todo[]>>
}

const AddTodos : React.FC<props> = ({ add }) => {
    const [ input , setInput ] = useState<string>("")

    const submitHandler = (e : React.FormEvent) => {
        e.preventDefault()

        if (input !== "") {
            add((todos : todo[]) : todo[] =>{
                return [
                    ...todos,
                    {
                        id : Date.now(),
                        title : input,
                        is_done : false
                    }
                ]
            } )

            setInput("")
        }
    }

    return (
        <form onSubmit={submitHandler} className="form-inline mb-4">
            <div className="form-group d-flex">
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} className="form-control mx-sm-3" placeholder="i want to do ..."/>
            <button type="submit" className="btn btn-primary">add</button>
            </div>
        </form>
    )
}


export default AddTodos
