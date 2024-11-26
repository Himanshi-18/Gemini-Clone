import React, { useContext } from 'react';
import "./Main.css";
import { imgs } from "../../assets/images/assets";
import { Context } from "../../Context/Context";

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={imgs.user_icon} alt="user icon" />
            </div>
            <div className="main-container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={imgs.compass_icon} alt="compass icon" />
                            </div>
                            <div className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={imgs.code_icon} alt="code icon" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={imgs.bulb_icon} alt="bulb icon" />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={imgs.message_icon} alt="message icon" />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='result'>
                            <div className="result-title">
                                <img src={imgs.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="result-data">
                                <img src={imgs.gemini_icon} alt="" />
                                {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                }
                            </div>
                        </div>
                    </>
                )}
                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder='Enter a prompt here'
                        />
                        <div>
                            <img src={imgs.gallery_icon} alt="gallery icon" />
                            <img src={imgs.mic_icon} alt="mic icon" />
                            <img onClick={() => onSent()} src={imgs.send_icon} alt="send icon" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses and verify the information from reliable sources.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
