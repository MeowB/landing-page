import './styles/Header.scss'

import Nav from './Nav';
import Button from './Button';

export default function Header() {
	return (
		<header>
			<Nav />
			<div className="content">
				<h1>Data <span className="underlined">tailored</span> to your needs.</h1>
				<Button value="Learn more"/>
			</div>
			<div className="image-container">
				<img src="src\assets\images\image-hero.webp" alt="image of a phone" />
			</div>
		</header>
	)
}