import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

function NavBar() {
    return (
            <div className="n-nav">
            <div className="n-left">
                <div className="n-name">mohamed</div>
                <span>toggle</span>
            </div>

            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>home</li>
                        <li>services</li>
                        <li>portfolio</li>
                    </ul>
                </div>
                <button className="button n-button">
                    contact us
                </button>
            </div>
        </div>
    )
}

export default NavBar;



