function HeroSection() {
	return (
		<main className="bg-hero-con">
			<section className="bg-hero">
				<div>
					<h1 className="upper-h">
						<span className="upper">LYNXAI</span> a data-driven platform
					</h1>
					<h1 className="lower-h">
						Makes ESG Investment <span className="lower">Efficient</span>
					</h1>
				</div>
				<div className="hero-btn-wrap">
					<span className="high-btn">Request a demo</span>
				</div>
			</section>
			<img src="./images/hero-bg.png" className="bg-hero-img" />
		</main>
	);
}

export default HeroSection;
