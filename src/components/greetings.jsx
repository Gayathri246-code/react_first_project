import Data from "./students"

function Greet(prop){
    // console.log(prop)
    return(
        <div>
            <Data  name={prop.name}/>
            <p>This is parent jsx and aslo has properties of students</p>
        </div>
    )
}
export default Greet