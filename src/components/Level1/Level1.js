import React, {useCallback, useEffect, useState} from 'react'
import classes from './Level1.module.css'
import {sendData,getData} from '../Utils/utils'
import {useNavigate} from 'react-router-dom'

function Level1() {
  const [clueIsActive,setClueIsActive] = useState(false)
  const [isCorrectDoor,setIsCorrectDoor] = useState(false)
  const navigate = useNavigate()

  const redirectLevel1 = () => {
    getData()
    .then(data=>{
      navigate(data.url)
    })
  }

  useEffect(()=>{
    redirectLevel1()
  },[])

  const wrongDoorHandler = () => {
    sendData(7,'/dead1')
    .then(()=>{
      redirectLevel1()
    })
  }

  if(isCorrectDoor){
    sendData(4,'/level4')
    redirectLevel1()
  }

  return (
    <div>

      <div className={classes.container}>
        <h2>Choose any of them</h2>
        <h3>Hint: Select or Click on floor.</h3>
        <div className={classes.doorGrp}>

          <div className={classes.door} onClick={wrongDoorHandler}>
            <h1>Problems</h1>
            <h2>-O</h2>
            <h1>&nbsp;</h1>
          </div>
          <div className={classes.door} onClick={()=>{setIsCorrectDoor(true)}}>
            <h1>Challenges</h1>
            <h2>-O</h2>
            <h1>&nbsp;</h1>
          </div>
        </div>

      </div>

      <div className={`${classes.floor} ${clueIsActive ? classes.active : '' }`}>
        <span onClick={(e)=>{setClueIsActive(true)}}>Obstacles to success</span>
      </div>

    </div>
    
  )
}

export default Level1