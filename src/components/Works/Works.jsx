import React from 'react'
import   './Works.css'
import Upwork from '../../images/Upwork.png'
import FaceBooke from '../../images/Facebook.png'
import Amazon from '../../images/amazon.png'
import Shopify from '../../images/Shopify.png'
import Fiverr from '../../images/fiverr.png'


function Works() {
    return (
        <div className="works">
            <div className="awesome">
                <span>works for all these</span>
                <span>brand & clients</span>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id elit erat.<br/>
                    Etiam placerat porta urna, 
                    <br/>
                    Etiam placerat porta urna portaplacerat porta urna,Etiam placerat 
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                </span>
                <button className="button s-button">hair me</button>
                <div className="blur s-blur1" style={{background:'#abf1ff94'}}></div>
            </div>
            {/*right*/}
            <div className="m-right">
            <div className="m-mainCircle">
            <div className="m-secCircle">
                <img src={Upwork}/>
            </div>

            <div className="m-secCircle">
                <img src={Fiverr}/>
            </div>
            <div className="m-secCircle">
                <img src={Shopify}/>
            </div>
            <div className="m-secCircle">
                <img src={Amazon}/>
            </div>
            <div className="m-secCircle">
                <img src={FaceBooke}/>
            </div>
                {/* background circle */}

                <div className="m-back blue"></div>
                <div className="m-back yellow"></div>
            </div>
            </div>

        </div>
    )
}

export default Works