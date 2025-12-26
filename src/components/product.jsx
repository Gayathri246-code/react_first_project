import { children } from "react";
// import '../App.css'
function Parent({children}){
    return(
         <div  style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        width: "250px"
      }}>
            {children}
        </div>
    )
}

export default Parent