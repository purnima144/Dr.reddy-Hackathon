import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


function Footer(){
    return(
        <>
        <footer>
		
		<div class="footer-limiter">

			<div class="footer-right">

				<a href="#"><i class=""><FaFacebook/></i></a>
				<a href="#"><i class=""><FaTwitter/></i></a>
				<a href="#"><i class=""><FaInstagram/></i></a>
				<a href="#"><i class=""><FaGithub/></i></a>

			</div>

			<div class="footer-left">

				<p class="footer-links">Pharmark © 2022</p>

				<p>by Code crushers</p>
			</div>

		</div>

	</footer>
        </>
    )
}
export default Footer;