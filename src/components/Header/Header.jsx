import React, {Component} from "react"
import PropType from "prop-types"
import {nanoid} from "nanoid";
import "./Header.css"

export default class Header extends Component {
    static propTypes = {
        addTodo: PropType.func.isRequired
    }


    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入任务名称,回车确认" onKeyUp={this.handKeyUp}/>
            </div>
        )
    }

    handKeyUp = (event) => {
        if (event.keyCode === 13) {
            if (event.target.value.trim() === "") {
                alert("输入不能为空")
            } else {
                let result = {id: nanoid(), name: event.target.value, done: false}
                this.props.addTodo(result)
                event.target.value = ""
            }
        }
    }
}

