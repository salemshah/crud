import React, {Component} from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class TodoInput extends Component {
    render() {
        const {item, handleSubmit, editItem, handleChange} = this.props;
        return (
            <div className={"card card-body my-3"}>
                <form onSubmit={handleSubmit}>
                    <div className={"input-group"}>
                        <div className={"input-group-prepend"}>
                            <div className={"input-group-text bg-primary text-white"}>
                                <i className="fas fa-book"/>
                            </div>
                        </div>
                        <input
                            type="text"
                            className="form-control text-capitalize"
                            placeholder="Add Items"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className=
                            {`btn btn-block mt-3 text-uppercase
                            ${!editItem
                                ? "btn-primary"
                                : "btn-success"
                            }`}
                        disabled={!item}

                    >
                        {editItem ? 'edit item' : 'add item'}
                    </button>
                </form>
            </div>
        )
    }
}

export default TodoInput;