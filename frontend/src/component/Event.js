import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { getRoute, addRoute } from '../utils/APIRoutes'


const Event = () => {

    const navigate = useNavigate();
    const [event, setEvent] = useState("");
    const [date, setDate] = useState("");
    const [msg, setMsg] = useState("");
    const [all, setPost] = useState([])
        
    const data = { event, date };
    data.passedAway = true

    const PostEvent = async (e) => {
        e.preventDefault();
        setPost([...all, data]);
        
        axios.post(addRoute, { data })
            .then((res) => {
                setMsg("Task is added");
                setEvent("");
            }).catch((err) => {
                setMsg("Something Wrong");
            });
    }

    useEffect(() => {
        const callEvent = async () => {
            axios.get(getRoute)
                .then((res) => {
                    setPost(res.data);
                }).catch((err) => {
                    navigate('/login')
                });
        }
        callEvent();
    },[])

    return (
        <>
            <div className="homePage">
                <div className="event-container">
                    <div className="event-container-left">
                        {
                            all === undefined ? <h2>No Data</h2> :
                                
                                all.map((ele, ind) => (
                                
                                <div className="card" key={ind}><span><h3>{ele.event}</h3></span>
                                    {
                                        ele.passedAway ? <span className='success'>You have time</span>:<span className='fail'>Deadline Expire</span>
                                    }
                                    <br /><h4>{ele.date}</h4></div>
                            ))
                        }
                    </div>
                    <div className="event-container-right">
                        <div className="inputField">
                            <h4 id="msg">{msg}</h4>
                            <div className="title"><h2>Add Task</h2></div>
                            <div className="content">
                                <form method="POST">
                                    <div className="user-details">
                                        <div className="input-box">
                                            <span className="details">Task Name</span>
                                            <input type="text" name="title" value={event} placeholder="Title of Event"
                                                onChange={(e) => setEvent(e.target.value)}
                                            />
                                        </div>
                                        <div className="input-box">
                                            <span className="details">Deadline Date</span>
                                            <input type="date" name="date" value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="button">
                                        <input type="submit" value="ADD" name="addEvent" onClick={PostEvent} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event
