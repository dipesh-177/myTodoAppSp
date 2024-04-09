import { useState } from "react";

export default function Todo({title, description, uniqueKey, done, changeAdded}){


// console.log(uniqueKey);
const [btn1, setBtn1] = useState(done ? "Undo" : "Mark as Done");
   async function handleDone(){
    
        fetch("http://localhost:3001/done", {
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                "id": uniqueKey
              }
        })
        .then( async (res)=>{
           const msg  = await res.json();
           console.log(msg.msg);
           if(btn1=="Undo"){
            setBtn1("Mark as Done")
           } else{
            setBtn1("Undo")
           }
           changeAdded();
        })
        .catch(err=>{
console.log(err);
        })
    }

    async function handleDelete(){
        fetch("http://localhost:3001/deletetodo", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: uniqueKey})
        })
        .then(async (res)=>{
            const ans = await res.json();
            console.log(ans.msg);
            changeAdded();
        })
        .catch((error)=>{
            console.log(error);
        })
    }
return(
    <div style={{
        padding: "20px",
        backgroundColor: "grey",
        display: "flex",
        alignItems: "self-start",
        justifyContent: "space-evenly",
        flexDirection: "column",
        width: "40%",
        border: "2px solid yellow",
        borderRadius: "20px",
        margin: "8px"
    }}>
    <h1 >
        {title}
    </h1>
    <h3>
        {description}
    </h3>
    <div>
    <button style={{
        marginTop: "10px",
        padding: "5px 15px",
        backgroundColor: "Green",
        color: "white",
        border: "2px solid red",
        borderRadius: "10px"
    }} onClick={handleDone}>{btn1}</button>

<button style={{
        margin: " 5px 10px",
        padding: "5px 15px",
        backgroundColor: "Green",
        color: "white",
        border: "2px solid red",
        borderRadius: "10px"
    }} onClick={handleDelete}>Delete</button>
    </div>
    
    </div>
)
}