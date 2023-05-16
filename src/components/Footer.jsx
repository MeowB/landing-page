import Socials from './Socials'
import './styles/Footer.scss'

export default function Footer() {
	
	return(
		<footer>
			<img className='logo' src="src\assets\images\logo-dark.svg" alt="logo" />
			<Socials />
		</footer>
	)
}