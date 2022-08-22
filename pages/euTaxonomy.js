import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
function EuTaxonomy() {
	return (
		<main>
			<section className="tax-hero-con">
				<motion.section
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, x: 0, transition: { ease: 'easeInOut' } },
						visible: { opacity: 1, x: 0, transition: { delay: 0.5, ease: 'easeInOut' } }
					}}
					className="bg-hero"
				>
					<div className="desk-hero">
						<h1 className="upper-h">We help you manage EU Taxonomy</h1>
					</div>
					<div className="mobile-hero">
						<img src="./images/logo.png" />
						<h1 className="upper-h">We help you manage EU Taxonomy</h1>
					</div>
					<div className="hero-btn-wrap">
						<span className="high-btn">Request a demo</span>
						<span className="simple-btn">Know More</span>
					</div>
				</motion.section>
			</section>
			<section
				className="tax-who-con"
				data-aos="fade-in"
				data-aos-duration="500"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-once="false"
				data-aos-anchor-placement="top-center"
			>
				<section
					className="tax-who-sec"
					data-aos="fade-right"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
				>
					<h1>What is EU Taxonomy?</h1>
					<p>
						The EU taxonomy is a classification system that establishes a list of environmentally
						sustainable economic activities. It could play an important role in helping the EU scale up
						sustainable investment and implement the European green deal. To be classified as a sustainable
						economic activity, according to the EU taxonomy regulation, a company must not only contribute
						to at least one environmental objective but also must not violate the remaining ones.
					</p>
				</section>
			</section>
			<section
				className="tax-sol-con"
				data-aos="fade-in"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
			>
				<section className="sol-sec">
					<h1>Our Solutions</h1>
					<div className="cards-wrap">
						<div
							className="sol-cards"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="false"
							data-aos-anchor-placement="top-center"
						>
							<img src="./images/reports.png" className="icon" />
							<h4>Efficient EU Taxonomy Reporting</h4>
							<p>
								We provide quantitative and qualitative data to facilitate the EU Taxonomy Reporting.
								According with the regulator standards.
							</p>
						</div>
						<div
							className="sol-cards"
							data-aos="fade-in"
							data-aos-delay="500"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="false"
							data-aos-anchor-placement="top-center"
						>
							<img src="./images/analytics.png" className="icon" />
							<h4>Control of investments eligibility and alignment</h4>
							<p>
								We help the client navigate through any government regulations - like EU Taxonomy - and
								control any red flags from their investments.
							</p>
						</div>
						<div
							className="sol-cards"
							data-aos="fade-right"
							data-aos-delay="1000"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="false"
							data-aos-anchor-placement="top-center"
						>
							<img src="./images/cent.png" className="icon" />
							<h4>Centralized data from EU Taxonomy</h4>
							<p>
								We collect data from non-financial reports and Annual reports, so that every information
								regarding Taxonomy activities is covered.
							</p>
						</div>
						<div
							className="sol-cards"
							data-aos="fade-in"
							data-aos-delay="1500"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="false"
							data-aos-anchor-placement="top-center"
						>
							<img src="./images/realtime.png" className="icon" />
							<h4>Real-Time Data</h4>
							<p>
								We provide real-time data to follow companies in customers portfolio. Every new
								information about a company is instantaneously integrated and reflected into our
								platform.
							</p>
						</div>
						<div
							className="sol-cards"
							data-aos="fade-in"
							data-aos-delay="2000"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="false"
							data-aos-anchor-placement="top-center"
						>
							<img src="./images/search.png" className="icon" />
							<h4>Intelligent Search Service</h4>
							<p>
								We provide an intelligent search service where clients can obtain all official
								information concerning EU Taxonomy. Clients can easily find the content they’re looking
								for and discover the right answers to their questions when they need them
							</p>
						</div>
					</div>
				</section>
			</section>
			<section
				className="tax-del-con"
				data-aos="fade-in"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-once="false"
			>
				<section className="del-sec">
					<h1>What we deliver</h1>
					<div className="cards-wrap">
						<div
							className="sol-cards"
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="false"
							data-aos-anchor-placement="top-center"
						>
							<img src="./images/cloud.png" className="icon" />
							<h4>Interactive Cloud Platform</h4>
							<p>
								We deliver our results through a online platform in real-time. A cloud platform where
								clients can interact with dashboards, statistics and highlights from the report of EU
								Taxonomy of investment fund.
							</p>
						</div>
						<div
							className="sol-cards"
							data-aos="fade-in"
							data-aos-delay="500"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="false"
							data-aos-anchor-placement="top-center"
						>
							<img src="./images/analytics.png" className="icon" />
							<h4>Intelligent Eligibility Statistics</h4>
							<p>
								We provide quantitative and qualitative data to facilitate the EU Taxonomy Reporting
								in2022. According with the regulator standards.
							</p>
						</div>
						<div
							className="sol-cards"
							data-aos="fade-right"
							data-aos-delay="1000"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="false"
							data-aos-anchor-placement="top-center"
						>
							<img src="./images/highlight.png" className="icon" />
							<h4>Highlights EU Taxonomy</h4>
							<p>
								We present some highlights regarding EU Taxonomy by company. Our clients, can read main
								highlights on annual report of companies.
							</p>
						</div>
						<div
							className="sol-cards"
							data-aos="fade-left"
							data-aos-delay="1500"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="false"
							data-aos-anchor-placement="top-center"
						>
							<img src="./images/green.png" className="icon" />
							<h4>Eligibility Green Asset Ratio</h4>
							<p>
								We deliver our results through a online platform in real-time. A cloud platform where
								clients can interact with dashboards, statistics and highlights from the report of EU
								Taxonomy of investment fund.
							</p>
						</div>
						<div
							className="sol-cards"
							data-aos="fade-up"
							data-aos-delay="2000"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="false"
							data-aos-anchor-placement="top-center"
						>
							<img src="./images/search.png" className="icon" />
							<h4>Intelligent Search Service</h4>
							<p>
								We provide an intelligent search service where clients can obtain all official
								information concerning EU Taxonomy. Clients can easily find the content they&apos;re
								looking for and discover the right answers to their questions when they need them.
							</p>
						</div>
						<div
							className="sol-cards"
							data-aos="fade-right"
							data-aos-delay="2500"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-once="false"
							data-aos-anchor-placement="top-center"
						>
							<img src="./images/dash.png" className="icon" />
							<h4>Dashboards with Eligible Activities</h4>
							<p>
								We collect data from non-financial reports and Annual reports, so that every information
								regarding Taxonomy activities is covered
							</p>
						</div>
					</div>
				</section>
			</section>
		</main>
	);
}

export default EuTaxonomy;
