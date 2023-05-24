import './styles/Socials.scss'

import urlLogoFacebook from '../assets/images/icon-facebook.svg'
import urlLogoTwitter from '../assets/images/icon-twitter.svg'
import urlLogoInstagram from '../assets/images/icon-instagram.svg'

export default function Socials() {
	return (
		<ul className="socials">
			<li><a href="#"><img src={urlLogoFacebook} alt="facebook logo" /></a></li>
			<li><a href="#"><img src={urlLogoTwitter} alt="twitter logo" /></a></li>
			<li><a href="#"><img src={urlLogoInstagram} alt="instagram logo" /></a></li>
		</ul>
	)
}