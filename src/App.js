import React, {Component} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import List from "./components/List/List";
import {nanoid} from "nanoid";
import "./App.css"

class App extends Component {
    state = {
        todos: [
            {id: nanoid(), name: "吃饭", done: false},
            {id: nanoid(), name: "睡觉", done: false},
            {id: nanoid(), name: "敲代码", done: false},
            {id: nanoid(), name: "学习", done: false},
        ]
    }

    addTodo = (result) => {
        const {todos} = this.state
        const newTodos = [...todos, result]
        this.setState({
            todos: newTodos
        })
    }

    changeTodoDone = (newDone, nid) => {
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === nid) {
                return {...todo, done: newDone}
            } else return todo
        })

        this.setState({
            todos: newTodos
        })
    }


    DeleteTodos = (nid) => {
        const {todos} = this.state
        let newTodos = todos.filter(todo => todo.id !== nid)
        if (newTodos.length !== todos.length && window.confirm("确定要删除吗")) {
            this.setState({
                todos: newTodos
            })
        }
    }

    checkAllTodo = (done) => {
        const {todos} = this.state
        let newTodos = todos.map(todoObj => {
            return {...todoObj, done: done}
        })

        this.setState({
            todos: newTodos
        })
    }

    deleteDoneTodo = () => {
        if (window.confirm("确定要删除吗")) {
            const {todos} = this.state
            let newTodos = todos.filter(todo => todo.done === false)
            this.setState({
                todos: newTodos
            })
        }
    }

    render() {
        return (
            <div id="root">
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo}/>
                        <List todos={this.state.todos}
                              changeDone={this.changeTodoDone}
                              DeleteTodos={this.DeleteTodos}
                        />
                        <Footer todos={this.state.todos}
                                changeTodo={this.checkAllTodo}
                                deleteDoneAll={this.deleteDoneTodo}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default App
