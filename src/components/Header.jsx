import './styles/Header.scss'

import Nav from './Nav';
import Button from './Button';

import urlCirclesLeft from '../assets/images/bg-pattern-1.svg'
import urlCirclesRight from '../assets/images/bg-pattern-2.svg'
import urlPhone from '../assets/images/image-hero.webp'

export default function Header() {
	return (
		<header>
			<div className="svg">
				<img className='circles-left' src={urlCirclesLeft} alt="background circles" />
				<img className='circles-right' src={urlCirclesRight} alt="background circles" />
			</div>
		

			<Nav />
			<div className="content">
				<h1>Data <span className="underlined">tailored</span> to your needs.</h1>
				<Button value="Learn more"/>
			</div>
			<div className="image-container">
				<img src={urlPhone} alt="image of a phone" />
			</div>
		</header>
	)
}