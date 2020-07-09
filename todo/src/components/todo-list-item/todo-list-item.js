import React, {Component} from "react";
import './todo-list-item.css'

export default class TodoListItem extends Component {
    onLabelClick = () => {
        this.setState({
            done: true
        })
    }

    state = {
        done: false
    }

    render() {
        const {label, important = false} = this.props;
        const {done} = this.state
        const style = {
            color: important ? 'steelblue' : 'black'
        }

        let classNames = "todo-list-item";
        if (done) {
            classNames += " done";
        }

        return (
            <div className={classNames}>
                <span
                    className="todo-list-item-label"
                    style={style}
                    onClick={this.onLabelClick}
                >{label}</span>
                <button className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o"></i>
                </button>
                <button className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation"></i>
                </button>
            </div>
        )
    }
}