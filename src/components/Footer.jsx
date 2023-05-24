import Socials from './Socials'
import './styles/Footer.scss'

import urlLogo from '../assets/images/logo-dark.svg'

export default function Footer() {
	
	return(
		<footer>
			<img className='logo' src={urlLogo} alt="logo" />
			<Socials />
		</footer>
	)
}