import React, {Component} from "react"
import Item from "../Item/Item";
import PropType from "prop-types";
import "./List.css"

export default class List extends Component {
    static propTypes = {
        todos: PropType.array.isRequired,
        changeDone: PropType.func.isRequired,
        DeleteTodos: PropType.func.isRequired
    }

    render() {
        const {todos, changeDone, DeleteTodos} = this.props
        return (
            <div>
                {
                    todos.map((todo, id) => {
                        return <Item key={id} {...todo}
                                     changeDone={changeDone}
                                     DeleteTodos={DeleteTodos}
                        />
                    })
                }
            </div>
        )
    }
}

