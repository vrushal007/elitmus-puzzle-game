import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {getData, sendData} from '../Utils/utils'
import classes from './Home.module.css'
import Modal from '../UI/Modal'

function Home() {
    const [level,setLevel] = useState()
    const navigate = useNavigate()
    const [isPopupVisible,setIsPopupVisible] = useState(false)

    const redirectHome = () => {
        getData()
        .then((data)=>{
            setLevel(data.level)
            navigate(data.url)
        })
    }

    const levelSetter = () => {
        getData()
        .then(data=>{
            setLevel(data.level)
        })
    }

    useEffect(()=>{
        levelSetter()
    },[])

    const nextHandler = () => {
        if(level === 1){
            navigate('/level1')
        }else if(level === 6 || level === 7 || level === 8){
            sendData(1,'/level1')
            .then(()=>{
                redirectHome()
            })
        }else{
            setIsPopupVisible(true)
        }
    }

    const continueHandler = () => {
        redirectHome();
    }

    const resetHandler = () => {
        sendData(1,'/level1')
        .then(()=>{
            redirectHome()
        })
    }

    const ModalContent = <Modal>
        <div className={classes.modalContainer}>
            <p>Do you want to continue from level {level}?</p>
            <div className={classes.actions}>
                <button onClick={continueHandler}>Yes</button>
                <button onClick={resetHandler}>No</button>
                <button onClick={()=>{setIsPopupVisible(false)}}>Cancel</button>
            </div>
        </div>
    </Modal>
    
    const WelcomePageContent = <div className={classes.container}>
    <div className={classes.title}>
        <p>PUZZLE GAME</p>
    </div>
    <div className={classes['welcome-text']}>
        <p>Welcome!</p>
        <button onClick={nextHandler}>Next</button>
    </div>
</div>

    return (
        <div>
            {isPopupVisible && ModalContent }
            {!isPopupVisible && WelcomePageContent}
        </div>
    )
}

export default Home