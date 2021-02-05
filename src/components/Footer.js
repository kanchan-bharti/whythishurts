import React from 'react';
// Images:

import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedIn.png';
import mail from '../assets/mail.svg';

function Footer() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9CACC" fillOpacity="1" d="M0,32L17.1,58.7C34.3,85,69,139,103,144C137.1,149,171,107,206,101.3C240,96,274,128,309,149.3C342.9,171,377,181,411,160C445.7,139,480,85,514,74.7C548.6,64,583,96,617,138.7C651.4,181,686,235,720,245.3C754.3,256,789,224,823,202.7C857.1,181,891,171,926,181.3C960,192,994,224,1029,229.3C1062.9,235,1097,213,1131,192C1165.7,171,1200,149,1234,165.3C1268.6,181,1303,235,1337,240C1371.4,245,1406,203,1423,181.3L1440,160L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path></svg>

            <div className="bg-pink my-0 py-0">
                <div className="row mx-0 px-0">
                    <div className="col-7">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#00af91" d="M20.3,0.6C26.3,11.7,30.9,30.3,17.7,44.7C4.5,59.1,-26.6,69.3,-44.5,57.2C-62.4,45.1,-67.2,10.9,-57.6,-5.3C-48,-21.4,-24,-19.5,-8.4,-16.8C7.2,-14.1,14.4,-10.5,20.3,0.6Z" transform="translate(87 93)" />
                            <path fill="#ffcc29" className="opacity-50" d="M50.4,-20.6C56.5,2.7,46.8,26.9,27.6,41.7C8.3,56.6,-20.4,62.2,-38.7,49.7C-56.9,37.3,-64.6,6.9,-56.4,-19.1C-48.2,-45.2,-24.1,-66.9,-1,-66.5C22.1,-66.2,44.2,-43.9,50.4,-20.6Z" transform="translate(100 100)" />
                            {/* <path fill="#F58634" className="opacity-50" d="M59.5,1.1C59.5,32.6,29.7,65.3,-1.5,65.3C-32.8,65.3,-65.6,32.6,-65.6,1.1C-65.6,-30.5,-32.8,-61,-1.5,-61C29.7,-61,59.5,-30.5,59.5,1.1Z" transform="translate(120 120)" /> */}
                            <path fill="#F58634" className="opacity-50" d="M70.9,-21.7C80.6,6.9,69.4,43.5,45.3,60.7C21.2,77.8,-15.9,75.4,-40,57.4C-64,39.4,-74.9,5.7,-66.1,-21.6C-57.2,-49,-28.6,-70,1,-70.3C30.6,-70.6,61.1,-50.2,70.9,-21.7Z" transform="translate(120 120)" />
                            <text x="122" y="130" textAnchor="middle" fill="white" className="lead contact-us">Contact Us On</text>
                        </svg>
                    </div>
                    <div className="col-5 px-4 align-self-center">
                        <div className="text-center">
                            <a href="http://www.linkedin.com/in/"><img className="icon" src={linkedin} alt="Contact via LinkedIn"/></a>
                            <a href="https://wwww.facebook.com" ><img className="icon" src={facebook} alt="Contact via Facebook"/></a>
                            <a href="http://www.instagram.com/in/"><img className="icon" src={instagram} alt="Contact via Instagram"/></a>
                            <br/>
                            <a href="mailto:"><img className="icon-lg" src={mail} alt="Contact via mail" /></a><span>&nbsp;&nbsp;</span>
                        </div>
                    </div>
                </div>
                <div className="row mx-0 justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2021 Why This Hurts?</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;