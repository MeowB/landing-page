import Button from './Button';
import './styles/CTA.scss';

export default function CTA(){
	return (
		<div className="CTA">
			<img className="founder" src="src\assets\images\image-founder.webp" alt="founder" />
			<div className="text">
				<h3>Be the first to test</h3>
				<p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</p>
				<Button value="Apply for access"/>

				<img className='circles-cta' src="src\assets\images\bg-pattern-3.svg" alt="svg background image" />

			</div>
		</div>
	)
}