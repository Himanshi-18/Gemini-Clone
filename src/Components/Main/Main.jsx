import React from 'react'
import "./Main.css";
import { imgs } from "../../assets/images/assets";

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={imgs.user_icon} alt="user icon" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trips</p>
                    <img src={imgs.compass_icon} alt="compass icon"/>
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={imgs.code_icon} alt="compass icon"/>
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={imgs.bulb_icon} alt="compass icon"/>
                </div>
                <div className="card">
                    <p>Brainstorm team bonding actiities for our work retreat</p>
                    <img src={imgs.message_icon} alt="compass icon"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main