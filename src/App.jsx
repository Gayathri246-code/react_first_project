
// let persons=[{id:1,names:"Chitti",role:"developer",salary:80000},
//   {id:2,names:"Ramu",role:"Trainer",salary:30000},
//   {id:3,names:"Raju",role:"Software",salary:50000},
//   {id:4,names:"Sita",role:"Manager",salary:60000},
//   {id:5,names:"Kamala",role:"HR",salary:40000},
//   {id:6,names:"Arjun",role:"Manager",salary:20000}]

// import Greet from "./components/greetings";

// let res=await fetch("https://fakestoreapi.com/products")
// let json_res=await res.json()
// console.log(json_res)

// let data=""
// await fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())            
//             .then(json=>{data=json})

import axios from "axios"
import Parent from "./components/product"
let response=await axios.get("https://fakestoreapi.com/products")
console.log(response)
// import './App.css'
function App(){
  return(
    <div>
      <h1>Products</h1>
    {response.data.map(each=>
      <Parent key={each.id}>
        <img src={each.image} style={{width:"250px"}} />
        <h1>{each.title}</h1>
        <p>{each.description}</p>
        <h3>{each.category}</h3>
        <button>Buy Now</button>
      </Parent>
      )}
    </div>
  )
}

// function App(){
//   return(
//     <div>
//       {/* <Greet name={persons[0].names} />
//       <Greet name={persons[0].role} />
//       <Greet name={persons[0].salary} />
//       <Greet name={persons[1].names} />
//       <Greet name={persons[1].role} />
//       <Greet name={persons[1].salary} />
//        */}
//        {persons.map(each=>
//       <div key={each.id}>
//       <h1>{each.names}</h1>
//       <p>{each.role}</p>
//       <h3>{each.salary}</h3>
//       </div>
//       )}
//     </div>
//   )
// }


export default App