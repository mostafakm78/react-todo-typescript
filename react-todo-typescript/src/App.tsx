import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import AddTodos from './assets/components/todos/AddTodos'
import todo from './assets/models/todo'
import TodoItem from './assets/components/todos/TodoItem'

enum FilterType {
    undone = 'undone',
    done = 'done'
}


function App() {
    const [ todos , setTodos ] = useState<todo[]>([])
    const [ filter , setFilter ] = useState<FilterType>(FilterType.undone)

    const DeleteTodo = ( id : number ) : void => {
        setTodos(
            todos.filter((todo : todo) => todo.id !== id)
        )
    }

    const EditTodo = ( id : number , value : string) : void => {
        setTodos(
            todos.map((todo : todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        title : value
                    }
                }

                return todo
            })
        )
    }

    const ToggleTodo = ( id : number ) => {
        setTodos(
            todos.map((todo : todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        is_done : ! todo.is_done
                    }
                }

                return todo
            })
        )
    }

    const FilteredTodos = todos.filter((todo : todo) => {
        if (filter === FilterType.done) {
            return todo.is_done
        } else {
            return ! todo.is_done
        }
    })

  return (
        <div className="App">
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                    <strong>Todo App</strong>
                    </a>
                </div>
            </div>
        </header>
        <main>
          <section className="jumbotron">
            <div className="container d-flex flex-column align-items-center">
                <h1 className="jumbotron-heading">Welcome!</h1>
                <p className="lead text-muted">To get started, add some items to your list:</p>
                <AddTodos add={setTodos} />
            </div>
          </section>
          <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                        <nav className="col-6 mb-3">
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a onClick={(e) => setFilter(FilterType.undone)} className={`nav-item nav-link font-weight-bold ${filter === FilterType.undone ? 'active' : 'none'}`} id="nav-home-tab">undone <span className="badge badge-secondary">9</span></a>
                                <a onClick={(e) => setFilter(FilterType.done)} className={`nav-item nav-link font-weight-bold ${filter === FilterType.done ? 'active' : 'none'}`} id="nav-profile-tab">done <span className="badge badge-success">9</span></a>
                            </div>
                        </nav>
                        {FilteredTodos.map((todo : todo) => <TodoItem key={todo.id} ToggleTodo={ToggleTodo} deletetodo={DeleteTodo} todo={todo} edittodo={EditTodo} />)}
                    </div>

                </div>
          </div>
        </main>
    </div>
  )
}

export default App
