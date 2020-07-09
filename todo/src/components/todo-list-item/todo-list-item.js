import React, {Component} from "react";
import './todo-list-item.css'

export default class TodoListItem extends Component {
    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }

    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    }

    state = {
        done: false,
        important: false
    }

    render() {
        const {label} = this.props;
        const {done, important} = this.state

        let classNames = "todo-list-item";
        if (done) {
            classNames += " done";
        }

        if (important) {
            classNames += " important";
        }

        return (
            <div className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={this.onLabelClick}
                >{label}</span>
                <button className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o"></i>
                </button>
                <button
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onMarkImportant}
                >
                    <i className="fa fa-exclamation"></i>
                </button>
            </div>
        )
    }
}