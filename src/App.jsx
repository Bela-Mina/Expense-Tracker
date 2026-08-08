import React from "react";
import Product from "./Product";
import Usercard from"./components/Usercard";
function App() {

  const user = [
    {
      name: "Abel",
      age: 22,
      skill: "Front-End Developer",
    },
    {
      name: "John",
      age: 30,
      skill: "Designer"
    },
    {
      name: "sara",
      age: 22,
      skill: "Developer"
    }
  ]
  return (
    <div>
    
      {user.map((user) => {
        return(
          <Usercard
            name={user.name}
            age={user.age}
            skill={user.skill}
          />
        )
      })}
    </div>
  )
}
export default App;


{/* <Usercard name="Abel"
          age={22}
          skill="Front-End Developer"
      />

      <Usercard name="John" age={30} skill="Designer" />

      <Usercard name="sara"
          age={22}
          skill="Developer"
      /> */}

      {/* <Product
        name="Future Project to be" 
        decription="Proffestional Developer"
        Risk="You must Sacrifice up to date"
      />
      <Product
        name="Front-End Developer Goal One" 
        decription="You Must Study Html, Css, JavaScript"
        Risk="You Work real world App"
      />
      <Product
        name="Back-End Developer Goal Two" 
        decription="You Must Study Node js Express, mangodb"
        Risk="You Must Connect Your Front-End App To Back-End"
      /> */}