import React from "react";


const AddTodos : React.FC = () => {
    return (
        <div className="form-inline">
            <div className="form-group">
            <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..."/>
            <button className="btn btn-primary">add</button>
            </div>
        </div>
    )
}


export default AddTodos
