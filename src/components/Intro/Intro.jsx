import React from 'react'
import './Intro.css';
import Github from '../../images/github.png';
import LinkedIn from '../../images/linkedin.png';
import Instgram from '../../images/instagram.png';
import Vector1 from '../../images/Vector1.png';
import Vector2 from '../../images/Vector2.png';
import boy from '../../images/boy.png';
import thumbup from '../../images/thumbup.png';
import Crown from '../../images/crown.png';
import glassesimoji from '../../images/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';




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
                    <img src={LinkedIn} alt=""/>
                    <img src={Instgram} alt=""/>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt=""/>
                <img src={Vector2} alt=""/>
                <img src={boy} alt=""/>
                <img src={glassesimoji} alt=""/>
                <div style={{top: '2%', left: '55%'}}>
                    <FloatingDiv img={Crown} txt1='web' txt2='developer'/>
                </div>
                <div style={{top: '380px', left: '-44px'}}>
                <FloatingDiv img={thumbup} txt1='best design' txt2='amard'/>
            </div>
            <div className="blur" style={{background: 'rgb(238 210 255)'}}></div>
            <div className="blur" style={{
                background: '#c1f5ff', 
                top: '17rem',
                width: '21rem',
                heigh: '11rem',
                left: '-9rem'
            }}>
            </div>
            </div>
        </div>
    )
}

export default Intro