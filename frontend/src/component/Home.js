import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <>
        
        <div className="homePage">
            <div className="content-left">
                <div className="circle"></div>
                <div className="square">
                    <div className="txt">
                        <h2>Now, Add Task along with date</h2>
                        <h3>And get started </h3>
                    </div>
                </div>
                <div className="circle1"></div>
            </div>
            <div className="content-right">
                <button className='btn'><NavLink to = "/event"><span>Get Started</span> </NavLink></button>
            </div>
        </div>
        </>
    )
}

export default Home
