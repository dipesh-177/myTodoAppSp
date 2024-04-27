import React, { useState } from "react";

export default function Inputs(props) {
  const formDivStyle = {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    padding: "20px"
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit() {
    fetch("https://todo.santoshpant.me/addtodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, description })
    })
    .then(async(res)=>{
      if(!res.ok){
        const msg = await res.json();
        alert(msg.msg);
      } else{
        setTitle("");
      setDescription("");
      props.changeAdded();
      }
      
    }) // assuming server responds with the new todo
    .catch(error => {
      console.error("Error adding todo:", error);
    });
      }


  return (
    <div className="formDiv" style={formDivStyle}>
      <input
        type="text"
        placeholder="Enter title"
        style={{ margin: "10px", padding: "10px" }}
        value={title} // bind value to title state
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Description"
        style={{ margin: "10px", padding: "10px" }}
        value={description} // bind value to description state
        onChange={(e) => setDescription(e.target.value)}
      />
      <button style={{ margin: "10px", padding: "10px" }} onClick={handleSubmit}>
       Add TODO
      </button>
    </div>
  );
}
