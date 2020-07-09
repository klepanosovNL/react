import React, {Component} from "react";
import "./item-add-form.css"

export default class itemAddForm extends Component {
    state = {
        label: ""
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: ""
        })
    }

    render() {
        return (
            <form
                className="item-add-form d-flex"
                onSubmit={this.onSubmit}
            >
                <input
                    className="form-control"
                    type="text"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done"
                    value={this.state.label}
                />
                <button
                    className="btn btn-outline-secondary text-nowrap"
                >Add item
                </button>
            </form>
        )
    }
}