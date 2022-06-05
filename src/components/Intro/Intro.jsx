import React from 'react'
import './Intro.css';
import Github from '../../images/github.png';



function Intro() {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>hy! i am</span>
                    <span>mohamed mamdouh</span>
                    <span>front end developer with heigh level of experience in web design</span>
                </div>
                <button className="button i-button">hire me</button>
                <div className="i-icons">
                    <img src={Github} alt=""/>
                </div>
            </div>
            <div className="i-right">
            xxxxxxxxxxxxxx
            </div>
        </div>
    )
}

export default Intro