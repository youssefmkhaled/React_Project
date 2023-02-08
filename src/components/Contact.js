import React from "react";
import Footer from "./Footer";
import FormComp from "./FormComp";
import HeroImage from "./Heroimage";
import Navbar from "./Navbar";



const Contact = () => {
    return (
        <div>
            <Navbar/>
            <HeroImage heading="Contact" text="Contact GLX Travel"/>
            <FormComp/>
            <Footer/>
        </div>
    );
}
export default Contact;