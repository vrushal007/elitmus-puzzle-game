import React, {useEffect, useState} from 'react'
import classes from './Level4.module.css'
import {getData, sendData} from '../Utils/utils'
import {useNavigate} from 'react-router-dom'

function Level4() {
  const [isCorrectDoor,setIsCorrectDoor] = useState(false)
  const navigate = useNavigate()

  const redirectLevel4 = () => {
    getData()
    .then(data=>{
      navigate(data.url)
    })
  }

  useEffect(()=>{
    redirectLevel4()
  },[])

  const wrongDoorHandler = () => {
    sendData(8,'/dead2')
    .then(()=>{
      redirectLevel4()
    })
  }

  if(isCorrectDoor){
    sendData(5,'/level5')
    redirectLevel4()
  }

  return (
    <div>

      <div className={classes.container}>
        <h3>Hint: Color of bus.</h3>
        <div className={classes.doorGrp}>

          <div className={classes.door} style={{background:'darkgray'}} onClick={wrongDoorHandler}>
            <h2>-O</h2>
          </div>
          <div className={classes.door} style={{background:'darkred'}} onClick={()=>{setIsCorrectDoor(true)}}>
            <h2>-O</h2>
          </div>
        </div>

      </div>
      <div className={classes.floor}>
        <a href='https://youtu.be/hwNWx1GTSKo' target='blank'>Link</a>
        <a href='https://youtu.be/8luaY8tEElc' target='blank'>Link</a>
      </div>

    </div>
    
  )
}

export default Level4