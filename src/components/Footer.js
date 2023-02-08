import React from "react";
import './FooterStyle.css'
import { FaFacebook,FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter } from "react-icons/fa";

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <h3>Contact Us</h3>
                    <div className="location">
                        <h4><FaSearchLocation size={20} style={{color:'#fffff', marginRight:'2rem'}}/>
                        123 Acme St. | <span>Houston, Tx</span></h4>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color:'#fffff', marginRight:'2rem'}} />1-800-123-1234</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color:'#fffff', marginRight:'2rem'}}/>trips@glaxy.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, excepturi,
                        eum dolorum iusto ut soluta odit minus facilis dolores omnis veritatis exercitationem, 
                        cum laudantium minima! Dolor quia eveniet quis blanditiis?  
                        </p>
                    <div className="social">
                        <FaFacebook size={30} style={{color:'#fffff', marginRight:'1rem'}}/>
                        <FaTwitter  size={30} style={{color:'#fffff', marginRight:'1rem'}}/>
                        <FaLinkedin size={30} style={{color:'#fffff', marginRight:'1rem'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;