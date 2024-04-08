import Inputs from "./components/Inputs"
import { useState, useEffect } from "react"
import Todo from "./components/Todo";
import NavBar from "./components/NavBar";
function App() {

  const[data, setData] = useState([]);
  const[added, setAdded] = useState(false);

  useEffect(() => {
   fetchData();
  }, [added]);

  function fetchData(){
    fetch("http://localhost:3001/gettodos", { method: "GET" })
    .then(async (res) => {
      const data = await res.json();
      setData(data);
    });
  }
const changeAdded = ()=>{
  if(added==true){
    setAdded(false);
    console.log(added);
  } else{
    setAdded(true);
    console.log(added);
  }
}

function done(){

}
  return (
    <div style={{margin: "0px",
    padding: "0px",
    width:"100%"
    }}>
           <NavBar/>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column"
      }}>
   
    <Inputs  changeAdded={changeAdded} />
    {data.map(todo => (
      !todo.isDone && 
        <Todo key={todo._id} title={todo.title} description={todo.description} done={false} uniqueKey={todo._id} changeAdded={changeAdded} />
    
    ))}
    <hr style={{ visibility: "visible", backgroundColor: "black", width: "50%", height: 1  }} />

    {data.map(todo => (
      todo.isDone && 
      <Todo key={todo._id} title={todo.title} description={todo.description} done={true} uniqueKey={todo._id} changeAdded={changeAdded} />
  
  ))}
      </div>
    
    </div>
  )
}

 


export default App
