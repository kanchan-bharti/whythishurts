import React from 'react';
import {Link} from 'react-router-dom';

function Footer()
{
    return(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9CACC" fill-opacity="1" d="M0,32L17.1,58.7C34.3,85,69,139,103,144C137.1,149,171,107,206,101.3C240,96,274,128,309,149.3C342.9,171,377,181,411,160C445.7,139,480,85,514,74.7C548.6,64,583,96,617,138.7C651.4,181,686,235,720,245.3C754.3,256,789,224,823,202.7C857.1,181,891,171,926,181.3C960,192,994,224,1029,229.3C1062.9,235,1097,213,1131,192C1165.7,171,1200,149,1234,165.3C1268.6,181,1303,235,1337,240C1371.4,245,1406,203,1423,181.3L1440,160L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path></svg>
        
        

        <div className="container col-12 bg-pink pb-5 mt-0">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:whythishurts@cure.net">whythishurts.info</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2021 Why This Hurts?</p>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
}
export default Footer;