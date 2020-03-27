import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos }) => {
  return (
    <React.Fragment>
      <h2>All Persons</h2>
      
      <table border='1'>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>

       {todos.map(todo => (
         
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
            </tr>
         
        ))}
          </table>

    </React.Fragment>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array
}