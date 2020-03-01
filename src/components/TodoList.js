import React, {Component} from 'react';
import TodoItem from './TodoItem'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props;
        return (
            <section>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center"> tod list </h3>
                    {items.map(item => {
                        return (
                            <TodoItem
                                key={item.id}
                                title={item.title}
                                handleDelete={() => handleDelete(item.id)}
                                handleEdit={() => handleEdit(item.id)}
                            />)
                    })}
                    <button
                        type="button"
                        className="btn btn-danger btn-block text-uppercase"
                        onClick={clearList}>
                        clear list
                    </button>
                </ul>
            </section>
        )
    }
}

export default TodoList;