import React, {useRef, useState} from 'react'
import classes from './Level5.module.css'
import {getData, sendData} from '../Utils/utils'
import {useNavigate} from 'react-router-dom'

function Level5() {
  const[showHint,setShowHint] = useState(false)
  const inpRef = useRef()
  const navigate = useNavigate()
  console.log("Solution:","if you spend all your energy and your time on small stuff")
  const clickmeHandler = () => {
    setShowHint(true)
  }

  const redirectLevel5 = () => {
    getData()
    .then(data=>{
      navigate(data.url)
    })
  }

  const submitHandler = () => {
    const val = inpRef.current.value
    const ansString = "if you spend all your energy and your time on small stuff"
    if(val.toLowerCase() === ansString){
      sendData(3,'/level3')
      .then(()=>{
        redirectLevel5()
      })
    }
  }

  return (
    <div className={classes.container}>
      {showHint && <p>Hint: Listen and write First sentence spoken at 02:10 in the&nbsp;
        <a href='https://youtu.be/SqGRnlXplx0' target='blank'>Video</a>
      </p>}
      <div className={classes.window}>
        <div className={classes.border}> 
          <textarea rows='3' ref={inpRef}/>
          <button onClick={submitHandler}>Submit</button>
          <button onClick={clickmeHandler}>Click me for hint!</button>
        </div>
      </div>
    </div>
  )
}

export default Level5