// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Card from './Card'
// import event from './event'
import './App.css'


function App() {
  return(
  <>
   <h1 class="head">Product Cards</h1>


      <div className="container">

        <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFn4z-NRM--6DMDWHihzUkm1LJM0VWSRXZEopX4h-2Q&s"
          title="Laptop"
          description="HP Laptop with 8GB RAM"
          price="55000"
        />


        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVaEOvzAW2t4_SSbIpcmF11rCCNlicIr9XwUqaW359w&s"
          title="Mobile"
          description="Android smartphone"
          price="25000"
        />


        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaJM7yWOpH8i1t4zW2Wh0JndvsjImXZBIwPimZWzP5w&s"
    
          title="Headphone"
          description="Wireless headphone"
          price="3000"
        />
        <Card
              image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRu4BIeM5G8EOjhwoSLR6Cd5n355CUrAWQE6jeTwKmdL532lLMaKX1VknyreV2ZBBySgn5tPA2RdHOrLtUEJINwaPTSbFWr"
          title="Headphone"
          description="EarPhones"
          price="3000"
        />


      </div>


    </>
  )
       
  
}
  
export default App
