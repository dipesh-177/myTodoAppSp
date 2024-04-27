import { Link, useNavigate } from "react-router-dom"

export default  function NavBar(){
    const navigate = useNavigate();
    return (
        <div style={{
            display: "flex",
            alignItems:"center",
            justifyContent: "space-between",
            backgroundColor:"green",
            padding: "15px",
            align:"center"

        }}>
            <div ><Link to='/' style={{textDecoration: "none"}} ><b>My Todos </b></Link></div>
            <div style={{width:"50%"}} >
                <ul style={{
                display: "flex",
                alignItems:"center",
                justifyContent: "flex-end",
                
            }}>
                    <li style={{marginRight: "40px"}}> <Link to='about' style={{textDecoration: "none"}} >About Me </Link> </li>
                    <li style={{marginRight:"20px"}}><Link to='socials' style={{textDecoration: "none"}} >My Socials</Link></li>
                </ul>
            </div>
        </div>
    )
}