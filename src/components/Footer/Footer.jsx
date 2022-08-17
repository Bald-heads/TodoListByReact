import React, {Component} from "react"
import PropType from "prop-types";
import "./Footer.css"


export default class Footer extends Component {
    static propTypes = {
        todos: PropType.array.isRequired,
        changeTodo: PropType.func.isRequired
    }

    render() {
        const {todos} = this.props
        let doneCount = todos.reduce((pre, curr) => {
            return pre + (curr.done === true ? 1 : 0)
        }, 0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"
                           onChange={this.handleCheckAll}
                           checked={doneCount === todos.length}
                    />
                </label>
                <span>
                    <span>已完成{doneCount}</span>  /全部{todos.length}
                </span>
                <button className="btn btn-danger" onClick={this.DeleteAll}>清除已完成任务</button>
            </div>
        )
    }

    handleCheckAll = (event) => {
        this.props.changeTodo(event.target.checked)
    }

    DeleteAll = () => {
        this.props.deleteDoneAll()
    }
}

