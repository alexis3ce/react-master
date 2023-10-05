import React from 'react'
import './App.css';

const Card = props => {
    console.log(props)
  return (
    <div className="card">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width: '100%'}}/>
        <div className="container">
            <h4><b>{props.name}</b></h4> 
            <p>Architect & Engineer</p> 
        </div>
    </div>
  )
}

export default Card