import React from 'react'
import classes from './Dead2.module.css'
import {sendData} from './../Utils/utils'
import {useNavigate} from 'react-router-dom'

function Dead2() {
  const navigate = useNavigate()
  
  const restartHandler = () => {
    sendData(1,'/level1')
    navigate('/')
  }

  return (
    <div className={classes.container}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <pattern id='pattern'
           x="0" y="0" width="210" height="210"
           patternUnits="userSpaceOnUse" >
    <text className={classes['emoji-pattern']} x="0" y="100" width="80" fontSize="80">
      &#128546;
    </text>
    <text className={classes['emoji-pattern']} x="100" y="200" width="80" fontSize="80">
      &#128546;
    </text>
  </pattern>
  <rect fill="url(#pattern)" x="0" y="0" width="100%" height="100%"/>
</svg>
<section className={classes.message}>
  <h1>Sorry, You chose wrong door.</h1>
  <h2>Hint: Open 2nd videoclip of Fast and Furious 7.</h2>
  <button onClick={restartHandler}>Restart Game</button>
</section> 
</div>
    
  )
}

export default Dead2