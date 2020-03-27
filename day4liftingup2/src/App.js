import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./TodoList"
import NewTodo from "./NewTodo"
import uuid from "uuid/v1";

function App() {
  const initialData = [
    { id: uuid(), todoText: "Jens" },
    { id: uuid(), todoText: "Peter" },
    { id: uuid(), todoText: "Jakob" }
  ]
  const [todos, setTodos] = useState(initialData);
  const [newTodo, setNewTodo] = useState({ id: "", todoText: "" });
  console.log(todos)

  const addTodo = todo => {
    if (todo.id === "") { // id=-1 Indicates a new object
      todo.id = uuid();
      todos.push(todo);
    } else {//if id != "", it's an existing todo. Find it and add changes
      let todoToEdit = todos.find(t => t.id === todo.id);
      todoToEdit.todoText = todo.todoText;
    }
    setTodos([...todos]);
    setNewTodo({id:"", todoText:""})
  };
  
  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom:25 }}>
        Total sum of Persons: {todos.length}
      </h2>

      <div className="row">
        <div className="col-6 allTodos">
          <TodoList todos={todos} />
        </div>
        <div className="col-5 new-todo">
          <NewTodo
            addTodo={addTodo}
            nextTodo={newTodo}            
          />
        </div>
      </div>
    </div>
  );
}
export default App;





//Questions for Day4 (Lifting state up)

/* 

1 +2 ) What is meant by the react term “Lifting State Up”/Where do you lift it up to?

       ANSWER: In React, sharing state is accomplished by moving it up to the closest
               common ancestor of the components that need it. This is called “lifting state up".

3)     Which way does React recommend data to flow: From sibling to sibling, from 
       bottom to top or from top to bottom? 
       
       ANSWER: React recommend data to flow: From top to buttom.

4)     Lifting state up, involves a great deal of boilerplate code, what’s the benefit we 
       get from doing “things” like this?
 
       ANSWER: It makes the usage of components much easier, because we only need to change 
               the states they use.

*/
