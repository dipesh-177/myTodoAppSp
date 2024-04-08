import React, { useState } from "react";

export default function Inputs({ addTodo }) {
  const formDivStyle = {
    width: "500px",
    display: "flex",
    flexDirection: "column"
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit() {
    fetch("http://localhost:3001/addtodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, description })
    })
    .then(response => response.json()) // assuming server responds with the new todo
    .catch(error => {
      console.error("Error adding todo:", error);
    });

    updateTodo();
      }

      function updateTodo(){
        
        fetch("http://localhost:3001/gettodos", { method: "GET" })
      .then(async (res) => {
        const data = await res.json();
        addTodo(data);
        console.log(data);
        setTitle("");
        setDescription("")
      })
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
        Submit
      </button>
    </div>
  );
}
