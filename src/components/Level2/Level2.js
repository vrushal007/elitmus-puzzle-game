import React, {useEffect, useRef} from 'react'
import classes from './Level2.module.css'
import {getData, sendData} from '../Utils/utils'
import {useNavigate} from 'react-router-dom'

function Level2() {
  const inpRef = useRef()
  const navigate = useNavigate()

  const redirectLevel2 = () => {
    getData()
    .then(data=>{
      navigate(data.url)
    })
  }

  useEffect(()=>{
   redirectLevel2()
  },[])

  const inpChangeHandler = () => {
    const val = inpRef.current.value
    if(val.toLowerCase() === 'died' || val.toLowerCase() === 'passed away'){
      sendData(2,'/level2')
      .then(()=>{
        redirectLevel2()
      })
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.window}>
        <div className={classes.border}>
          <div className={classes.vertical}></div>
          <div className={classes.vertical}></div>
          <div>
            <p>Hint:Find link</p>
            <p>Alternative of RIP:</p>
            <input type='text' ref={inpRef} onChange={inpChangeHandler} />
          </div>
          <div className={classes.vertical}></div>
          <div className={classes.vertical}></div>
        </div>
      </div>
      <a target='blank' href='https://www.instagram.com/p/CqW8sWoLXIP/?igshid=NTc4MTIwNjQ2YQ=='>link</a>
    </div>
  )
}

export default Level2