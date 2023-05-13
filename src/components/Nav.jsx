import Link from './Link'
import './styles/Nav.scss'

export default function Nav() {
	return (
		<nav>
			<img src="src\assets\images\logo-light.svg" alt="Logo" />
			<Link source='#' value='Apply for access'/>
		</nav>
	)
}