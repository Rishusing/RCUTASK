import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";

function Navbar() {
    const [image, setImage] = useState({})
    const [flag, setFlag] = useState(true)

    useEffect(() => {

        const loadImage = async () => {
            const num = Math.floor((Math.random() * 500) + 1);

            axios.get('https://picsum.photos/id/' + num + '/info')
                .then(res => {
                    setImage(res.data)
                    // console.log(res.data);
                    setFlag(false);
                })

        }
        loadImage();

    }, [])

    return (
        <>
            <div className="navbar">
                <span className='home'>
                    <NavLink to='/'>
                        <AiFillHome color='purple'/>  
                    </NavLink>
                </span>
                <span className='profilePic'>
                    {
                        flag ? <img src="https://cdn-icons-png.flaticon.com/512/709/709722.png" width="80px" height="80px" alt="" />
                            : <img src={image.download_url} width="80px" height="80px" alt="" />
                    }
                </span>
            </div>
        </>
    )
}

export default Navbar
