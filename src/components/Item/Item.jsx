import React, {Component} from "react"
import PropType from "prop-types";
import "./Item.css"


export default class Item extends Component {
    static propTypes = {
        name: PropType.string.isRequired,
        done: PropType.bool.isRequired,
        id: PropType.string.isRequired,
        changeDone: PropType.func.isRequired,
        DeleteTodos: PropType.func.isRequired
    }

    render() {
        const {name, done, id} = this.props
        return (
            <div>
                <li>
                    <label>
                        <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger-del" onClick={this.handDelete(id)}>删除</button>
                </li>
            </div>
        )
    }

    handDelete = (id) => {
        return () => {
            const {DeleteTodos} = this.props
            DeleteTodos(id)
        }
    }

    handleCheck = (id) => {
        return (event) => {
            const {changeDone} = this.props
            changeDone(event.target.checked, id)
        }
    }
}

