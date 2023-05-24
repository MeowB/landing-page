import Link from './Link'
import './styles/Nav.scss'

import urlLogo from '../assets/images/logo-light.svg'

export default function Nav() {
	return (
		<nav>
			<img src={urlLogo} alt="Logo" />
			<Link source='#' value='Apply for access'/>
		</nav>
	)
}