import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';


function Footer(){
    return(
        <>
        <div className='footer-content'>
                <h3>Code Crushers</h3>
                <p>Foolish Developer ----- source code.</p>
            </div>
        <div class="footer-bottom">
            <ul class="socials">
                <li ><a href="#"><i class="fa fa-facebook"><FaFacebookF/></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"><FaTwitter/></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"><FaInstagram/></i></a></li>
                <li><a href="#"><i class="fa fa-youtube"><FaYoutube/></i></a></li>
                
            </ul>
            <p><a href="#">copyright &copy;2021  foolishdeveloper</a></p>
        </div>
        </>
    )
}
export default Footer;