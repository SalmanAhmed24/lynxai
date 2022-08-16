function ChooseUs() {
	return (
		<section
			className="choose-con"
			data-aos="fade-in"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-once="false"
		>
			<div className="choose-h-wrap">
				<h1>
					Why<span> choose Us</span>
				</h1>
			</div>
			<div className="choose-card-wrap">
				<div
					className="choose-card"
					data-aos-offset="10"
					data-aos="fade-left"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
				>
					<p className="choose-p">Consistency on ESG Data</p>
					<p className="choose-info">
						We help the client navigate through any government regulations - like EU Taxonomy - and control
						any red flags from their investments.
					</p>
				</div>
				<div
					className="choose-card"
					data-aos="fade-in"
					data-aos-offset="10"
					data-aos-delay="500"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
				>
					<p className="choose-p">Control ESG Standards</p>
					<p className="choose-info">
						We provide quantitative and qualitative data to facilitate the investment analysis. The provided
						data is adapted to the client ESG standards.
					</p>
				</div>
				<div
					className="choose-card"
					data-aos="fade-right"
					data-aos-offset="10"
					data-aos-delay="1000"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
				>
					<p className="choose-p">Processing ESG Information</p>
					<p className="choose-info">
						We collect data from non-financial and financial reports, big data and score providers,
						institutional news, Reddit, Glassdoor, blogs, social media, and more, so that all information is
						covered
					</p>
				</div>
			</div>
			<img src="./images/question.png" className="choose-bg-img" />
		</section>
	);
}

export default ChooseUs;
