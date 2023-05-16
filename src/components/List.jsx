import './styles/List.scss'

export default function List() {
	return(
		<ol>
			<li>
				<span className="num">1</span>
				<div className="text">
					<h2>Actionable insights</h2>
					<p>Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics</p>
				</div>
			</li>
			<li>
				<span className="num">2</span>
				<div className="text">
					<h2>Data-driven decisions</h2>
					<p>Make data-driven devisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.</p>
				</div>
			</li>
			<li>
				<span className="num">3</span>
				<div className="text">
					<h2>Always affordable</h2>
					<p>Always affordable procing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
				</div>
			</li>
		</ol>
	);
}