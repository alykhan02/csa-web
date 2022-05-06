import React from 'react'
import { Button } from './button'
import './hero.css'
import '../App.css'

function Hero() {
  return (
    <div className="hero-container">
        <h1>WELCOME TO CSA</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button whereTo='/about'className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
            {/* <Button whereTo='/faq' className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>FAQ <i className='fas fa-question-circle'/></Button> */}
        </div>
    </div>
  )
}

export default Hero