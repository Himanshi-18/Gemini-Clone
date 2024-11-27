import React, { useState, useContext } from 'react';
import './sidebar.css';
import { imgs } from '../../assets/images/assets';
import { Context } from '../../Context/Context';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context);
    
    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <img 
                    onClick={() => setExtended(prev => !prev)} 
                    className='menu' 
                    src={imgs.menu_icon} 
                    alt="menu icon" 
                />
                <div onClick={() => newChat()} className="new-chat">
                    <img src={imgs.plus_icon} alt="plus icon" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended && (
                    <div className="recent">
                        <p className='recent-title'>Recent</p>
                        {prevPrompts.map((item, index) => (
                            <div onClick={()=>loadPrompt(item)} className="recent-entry" key={index}>
                                <img src={imgs.message_icon} alt="message icon" />
                                <p>{item.slice(0,18)}...</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="bottom">
                <div className="botom-item recent-entry">
                    <img src={imgs.question_icon} alt="question icon" />
                    {extended && <p>Help</p>}
                </div>
                <div className="botom-item recent-entry">
                    <img src={imgs.history_icon} alt="history icon" />
                    {extended && <p>Activity</p>}
                </div>
                <div className="botom-item recent-entry">
                    <img src={imgs.setting_icon} alt="settings icon" />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
