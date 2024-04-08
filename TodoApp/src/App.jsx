import Inputs from "./components/Inputs"
import { useState, useEffect } from "react"
import Todo from "./components/Todo";
function App() {

  const[data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/gettodos", { method: "GET" })
      .then(async (res) => {
        const data = await res.json();
        setData(data);
      });
  }, []);

  const addTodo = (newTodo) => {
    // Update the data state by appending the new todo
    setData(newTodo);
  };

  return (
    <>
    <Inputs addTodo={addTodo}/>
    {data.map(todo => (
     <Todo key={todo._id} title={todo.title} description={todo.description}/>
    ))}
    </>
  )
}

 


export default App
