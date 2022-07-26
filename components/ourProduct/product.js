import { useRouter } from 'next/router';
function OurProduct() {
	const router = useRouter();
	return (
		<section className="product-con">
			<div className="product-h-wrap">
				<h1>
					Our<span> Products</span>
				</h1>
			</div>
			<div className="product-card-wrap">
				<div
					className="prod-card"
					data-aos="fade-left"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
				>
					<p className="prod-p">ESG Data Collection</p>
					<ul className="prod-list">
						<li>Non-Financial Reports</li>
						<li>Quantitative data</li>
						<li>Public News</li>
						<li>Reddit</li>
						<li>Apps with employee feedback</li>
						<li>Customer reviews</li>
					</ul>
				</div>
				<div
					className="prod-card"
					data-aos="fade-in"
					data-aos-delay="500"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
				>
					<p className="prod-p">ESG Data Monitor</p>
					<ul className="prod-list">
						<li>Identification of red flags</li>
						<li>Identification of investment opportunities</li>
						<li>Control over ESG standards</li>
						<li>Constant ESG portfolio monitoring</li>
						<li>Sentiment analysis on data sources like Twitter, Reddit, Blogs, and others</li>
						<li>Verification of reviewed data</li>
					</ul>
				</div>
				<div
					className="prod-card"
					data-aos="fade-right"
					data-aos-delay="1000"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
				>
					<p className="prod-p">ESG Data Deliver</p>
					<ul className="prod-list">
						<li>Automatic reports for regulators</li>
						<li>Automatic reports for investors and clients</li>
						<li>Automatic ESG reports based on specific topics</li>
						<li>Data deliver based on customizable ESG standards</li>
						<li>Investment ESG feedback</li>
					</ul>
				</div>
			</div>
			<div className="product-btn-wrap">
				<span className="simple-btn" onClick={() => router.push('/aboutUs')}>
					Know More
				</span>
				<span className="high-btn" onClick={() => router.push('/demo')}>
					Try our demo
				</span>
			</div>
			{/* <img src="./images/data-col-2.png" className="prod-bg-img" /> */}
		</section>
	);
}

export default OurProduct;
