import React from "react";
import './TrainingCompStyles.css'

import Pod from "../assets/pod.jpg"
import Moon from "../assets/moon.jpg"
import { Link } from "react-router-dom";

const TrainingComp = () => {
    return (
        <div className="training">
            <div className="left">
                <h1>Training</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deserunt.</p>
                <Link to='/contact'><button className="btn">Contact</button></Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="image top">
                        <img src={Moon} className='img' alt="" />
                    </div>
                    <div className="image bottom">
                        <img src={Pod} className='img' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainingComp;
