import React from 'react'
import './Services.css'
import HeartEmoji from '../../images/heartemoji.png'
import Glasses from '../../images/glasses.png'
import Humble from '../../images/humble.png'
import  Card  from '../Card/Card'
import Cv from './my-cv.pdf'
function Services() {
    return (
        <div className="Services">
            <div className="awesome">
                <span>my awesome</span>
                <span>services</span>
                <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id elit erat.<br/>
                Etiam placerat porta urna, 
                </span>
                    <button className="button s-button"><a href={Cv} download>download cv</a></button>

                <div className="blur s-blur1" style={{background:'#abf1ff94'}}></div>
            </div>
            <div className="cards">

                <div style={{left: '25rem'}}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'design'}
                        detail={'figma, sketch, photoshop, adobe, adobe xd'}
                    />
                </div>
                <div style={{top: '15rem', left: '1rem'}}>
                <Card
                    emoji={Glasses}
                    heading={'developer'}
                    detail={'html, css, javascript, react'}
                />
            </div>
            <div style={{top: '25rem', left: '22rem'}}>
            <Card
                emoji={Humble}
                heading={'ui / ux'}
                detail={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            />
        </div>
        <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
            </div>
        </div>
    )
}

export default Services