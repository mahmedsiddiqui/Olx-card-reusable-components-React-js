import React from 'react'
import Card from './Card'
import pic1 from './assets/1.jfif'
import pic3 from './assets/3.jfif'
import pic2 from './assets/4.jfif'
import pic4 from  './assets/5.jpg'
import './index.css'

const App = () => {
  return (
    <>
    <h1>Olx  Reusable Card Componenet</h1>
   <div className='card-box' >
   <Card  image={pic1} title="Corolla Gli" desc="Price:- 26 lac " />
    <Card  image={pic3} title="Bolan" desc="Price:- 10 lac " />
    <Card  image={pic2} title="Alto" desc="Price:- 15 lac " />
    <Card  image={pic4} title="Land Cruser" desc="Price:- 5.5 crore " />
    
   </div>
    </>
  )
}

export default App
