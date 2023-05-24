import Button from './Button';
import './styles/CTA.scss';

import urlFounder from '../assets/images/image-founder.webp'
import urlCirclesCta from '../assets/images/bg-pattern-3.svg'

export default function CTA(){
	return (
		<div className="CTA">
			<img className="founder" src={urlFounder} alt="founder" />
			<div className="text">
				<h3>Be the first to test</h3>
				<p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</p>
				<Button value="Apply for access"/>

				<img className='circles-cta' src={urlCirclesCta} alt="svg background image" />

			</div>
		</div>
	)
}