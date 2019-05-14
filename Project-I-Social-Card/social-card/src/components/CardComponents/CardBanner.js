import React from 'react';
import './Card.css';

const CardBanner = (props) => {
    return (
        <div className="card-banner">
            <div className="card-header">
                <div className="top-line">
                    <div className="top-h1">
                        Lambda School
                    </div>
                    <div className="twitter-and-date">
                        @LambdaSchool • 26 jan
                    </div>
                </div>
                <div className="top-info">
                    Let's learn React by building simple interfaces with components. Don't try to    overthink it, just keep it simple and have fun. One you feel comfortable using   components you are well on your way to mastering React!
                </div>
            </div>
            <div className="react-img-div">
                <img className="react-img" src="../../../../bigger-atom.png" alt="fbi"></img>
            </div>
            <div className="bottom-div">
                <div className="bottom-command">
                    Get started with React
                </div>
                <div className="bottom-info">
                    React makes it painless to create interactive UIs. Design simple views for each state in your application
                </div>
                <div className="bottom-link">
                    <a href="https://www.reactjs.org">reactjs.org</a>
                </div>
            </div>
            
            <div className="card-footer">
                <div className="footer-img-div">
                    <img className="footer-bar-img" src="../../../../better-bar.png" alt="fbi"></img>
                </div>
                <div className="twitter-comment-bubble"></div>
                <div className="twitter-retweet-icon"></div>
                <div className="twitter-like-icon"></div>
                <div className="twitter-direct-message-icon"></div>
            </div>
        </div>)
} 

export default CardBanner