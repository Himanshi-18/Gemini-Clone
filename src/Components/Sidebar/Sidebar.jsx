import React, { useState } from 'react';
import './sidebar.css';
import {imgs} from '../../assets/images/assets';

const Sidebar = () => {

    const [extended, setExtended] = useState(false)

  return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={() => setExtended(prev => !prev)} className='menu' src={imgs.menu_icon} alt="menu icon" />
            <div className="new-chat">
                <img src={imgs.plus_icon} alt="plus icon"/>
                {extended ? <p>New Chat</p>: null}
            </div>
            {extended ?
            <div className="recent">
            <p className='recent-title'> Recent </p>
            <div className="recent-entry">
                <img src={imgs.message_icon} alt="message icon"/>
                <p>What is react ...</p>
            </div>
        </div>  
        :null
        }
            
        </div>
        <div className="bottom">
            <div className="botom-item recent-entry">
                <img src={imgs.question_icon} alt="question icon" />
                {extended ? <p>Help</p> : null}
            </div>
            <div className="botom-item recent-entry">
                <img src={imgs.history_icon} alt="history icon" />
                {extended ? <p>Activity</p> : null}
            </div>
            <div className="botom-item recent-entry">
                <img src={imgs.setting_icon} alt="settings icon" />
                {extended ? <p>Settings</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar