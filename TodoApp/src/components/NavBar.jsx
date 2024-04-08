export default  function NavBar(){

    return (
        <div style={{
            display: "flex",
            alignItems:"center",
            justifyContent: "space-between",
            backgroundColor:"greenyellow",
            padding: "15px",
            align:"center"

        }}>
            <div >MyTodos</div>
            <div style={{width:"50%"}} >
                <ul style={{
                display: "flex",
                alignItems:"center",
                justifyContent: "flex-end",
                
            }}>
                    <li style={{marginRight: "40px"}}><a href="/" style={{textDecoration: "none"}}>About Me</a></li>
                    <li style={{marginRight:"20px"}}><a href="/" style={{textDecoration: "none"}}>My Socials</a></li>
                </ul>
            </div>
        </div>
    )
}