import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState(()=>JSON.parse(localStorage.getItem('tod')));
  //
  const [newTodo, setNewTodo] = useState("");


  // // const [ToDoList,setToDo] = useState ([]);
  // useEffect (()=>{
  //   localStorage.setToDo("ToDo",ToDo.Json)   
  //     // localStorage.setTodo("todos", JSON.stringify(todos));
  // },[ToDo])




  // const [items, setItems] = useState([]);

useEffect(() => {
  
   localStorage.setItem('tod',JSON.stringify(todos));
  
  
},[todos]);







  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

 

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
   console.log( 'haii', JSON.parse(localStorage.getItem('tod')))
  };
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  

  return (
    <div style={{marginLeft:"500px",marginBottom:"300px"}}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              <span
                style={{
                  marginRight: "10px",
                  textDecoration: todo.checked ? "line-through" : "none",
                }}
              >
                {todo.text}
               {/* <span> {this.this.props.id} </span>
                <button id ={this.this.props.id} onClick ={()=> this.props.handleDelete(this.props.id)} >Delete </button>
               */}
               <button
              style={{ marginTop: "5px", marginBottom: "5px" ,marginLeft:"100px"}}
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
              </span>

            </div>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;



