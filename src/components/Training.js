import React from "react";
import Footer from "./Footer";
import HeroImage from "./Heroimage";
import Navbar from "./Navbar";
import TrainingComp from "./TrainingComp";

const Training = () => {
    return (
        <div>
            <Navbar/>
            <HeroImage heading='Training' text="Pre-Flight & In-Flight Training."/>
            <TrainingComp />
            <Footer/>
        </div>
    );
}

export default Training;