import React, {useEffect, useState} from 'react'
import classes from './Level3.module.css'
import {getData, sendData} from '../Utils/utils'
import {useNavigate} from 'react-router-dom'

function Level3() {
  const [ans,setAns] = useState("")
  const [btn1IsActive,setBtn1IsActive] = useState(false)
  const [btn2IsActive,setBtn2IsActive] = useState(false)
  const [btn3IsActive,setBtn3IsActive] = useState(false)
  const [btn4IsActive,setBtn4IsActive] = useState(false)
  const navigate = useNavigate()

  
  const redirectLevel3 = () => {
    getData()
    .then(data=>{
      navigate(data.url)
    })
  }
  
  useEffect(()=>{
    redirectLevel3()
  },[])

  const btnClickHandler = async (e)=>{
    const outerText = e.target.outerText
    if(outerText === '1'){
      setBtn1IsActive(true)
    }
    if(outerText === '2'){
      setBtn2IsActive(true)
    }
    if(outerText === '3'){
      setBtn3IsActive(true)
    }
    if(outerText === '4'){
      setBtn4IsActive(true)
    }
    setAns((prev) => {
      let ansString = prev + outerText
      if(ansString ==='3421'){
        sendData(6,'/solution')
        .then(()=>{
          redirectLevel3()
        })
      }else if(ansString.length === 4){
        setBtn1IsActive(false)
        setBtn2IsActive(false)
        setBtn3IsActive(false)
        setBtn4IsActive(false)
        ansString = ""
      }
      return ansString
    })
    
  }

  return (
    <div className={classes.container}>
      <div className={classes.pzlSentence}>
      <p>1. The president is the head of the legislature.</p>
      <p>2. Two houses Rajya Sabha and Lok Sabha</p>

      </div>
        <div className={classes.cuboard}>
            <div className={classes['door-left']}>
              <button onClick={btnClickHandler} className={`${btn1IsActive && classes.active}`}>1</button>
              <p>-o</p>
              <button onClick={btnClickHandler} className={`${btn3IsActive && classes.active}`} >3</button>
            </div>
            <div className={classes['door-right']}>
              <button onClick={btnClickHandler} className={`${btn2IsActive && classes.active}`}>2</button>
              <p>o-</p>
              <button onClick={btnClickHandler} className={`${btn4IsActive && classes.active}`}>4</button>
            </div>
        </div>
        <div className={classes.pzlSentence}>
        <p>3. India has the largest democracy in the world. </p>
        <p>4. It has a parliament which comprises of,</p>
        </div>
    </div>
  )
}

export default Level3