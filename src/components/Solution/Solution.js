import React from 'react'
import classes from './Solution.module.css'
import treasure from './../assets/treasure.png'
import {sendData} from './../Utils/utils'
import {useNavigate} from 'react-router-dom'

function Solution() {
  const navigate = useNavigate()
  const restartHandler = () => {
    sendData(1,'/level1')
    navigate('/')
  }

  return (
    <div className={classes.container}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <pattern id='pattern' x="0" y="0" width="210" height="210" patternUnits="userSpaceOnUse" >
          <text className={classes['emoji-pattern']} x="0" y="100" width="80" fontSize="80">
            &#128081;
          </text>
          <text className={classes['emoji-pattern']} x="100" y="200" width="80" fontSize="80">
            🎉
          </text>
        </pattern>
        <rect fill="url(#pattern)" x="0" y="0" width="100%" height="100%"/>
      </svg>
      <div className={classes.image}>
          <img src={treasure} alt='treasure'/>
          <h1>You Are Winner!</h1>
          <button onClick={restartHandler}>Restart Game</button>
      </div>
    </div>
  )
}

export default Solution