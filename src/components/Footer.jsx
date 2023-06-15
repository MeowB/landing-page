import Socials from './Socials'
import './styles/Footer.scss'

import urlLogo from '../assets/images/logo-dark.svg'

export default function Footer() {
	
	return(
		<footer>
			<img className='logo' src={urlLogo} alt="logo" />
			<Socials />
			
			<div class="attribution">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
				Coded by <a href="#">Scott Borlon</a>.
			</div>
		</footer>
	)
}