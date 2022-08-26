import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
function AboutUs() {
	return (
		<main>
			<motion.section
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0, x: 0, transition: { ease: 'easeInOut' } },
					visible: { opacity: 1, x: 0, transition: { delay: 0.5, ease: 'easeInOut' } }
				}}
				className="hero-about"
			>
				<div className="about-info">
					<h1>About Us</h1>
					<p>
						Lynxai was created by people that believed in the power that finance can have in terms of
						environmental & social impact
					</p>
				</div>
			</motion.section>
			<section className="our-obj">
				<h1>Our Objective</h1>
				<div className="obj-card-wrap">
					<div
						className="obj-card"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="false"
						data-aos-anchor-placement="top-center"
					>
						<img src="./images/settings.png" alt="" />
						<p>Customize the way our clients manage and monitor their ESG standards and investments.</p>
					</div>
					<div
						className="obj-card"
						data-aos="fade-in"
						data-aos-delay="500"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="false"
						data-aos-anchor-placement="top-center"
					>
						<img src="./images/green.png" alt="" />
						<p>Support our clients collecting consistent and diversify ESG Data.</p>
					</div>
					<div
						className="obj-card"
						data-aos="fade-right"
						data-aos-delay="1000"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="false"
						data-aos-anchor-placement="top-center"
					>
						<img src="./images/stats.png" alt="" />
						<p>
							Simplify the process of reporting green taxonomy and adaptation to new regulation of our
							clients .
						</p>
					</div>
				</div>
			</section>
			<section className="mission-con">
				<div
					className="mission-info"
					data-aos="fade-in"
					data-aos-delay="500"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
				>
					<h1>Our Mission</h1>
					<p>
						We have the mission of changing the world through technology. By helping asset managers
						efficiently invest in sustainable products, we can impact the world in the most effective way
						possible.
					</p>
				</div>
			</section>
			<section className="team-con">
				<h1>Meet The Team</h1>
				<div className="main-team-wrap">
					<div
						className="team-card"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="false"
						data-aos-anchor-placement="top-center"
					>
						<div className="avatar-wrap">
							<img src="./images/tiago.jpg" alt="" />
						</div>
						<div className="info-team-wrap">
							<h1>Tiago Freire de Andrade</h1>
							<span>CEO & Co-founder</span>
						</div>
						<div className="overlay-card">
							<ul>
								<li>Founder @ 14ºC</li>
								<li>Founder @ Startup Kit</li>
								<li>Master in Strategic Business</li>
								<li>Mentored +75 early-stage startups</li>
							</ul>
						</div>
					</div>
					<div
						className="team-card"
						data-aos="fade-right"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="false"
						data-aos-anchor-placement="top-center"
					>
						<div className="avatar-wrap">
							<img src="./images/Edu.jpg" alt="" />
						</div>0
						<div className="info-team-wrap">
							<h1>Eduardo Amaro Rebelo</h1>
							<span>CTO & Co-founder</span>
						</div>
						<div className="overlay-card">
							<ul>
								<li>Tech Expert</li>
								<li>Data Analytics @ Iron Hack</li>
								<li>Electric Engineering @ IST</li>
								<li>Developer in FIS - Fashion Impact Score</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="mentor-con">
				<h1>Our Mentors</h1>
				<div className="main-mentor-wrap">
					<div
						className="mentor-card"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="false"
						data-aos-anchor-placement="top-center"
					>
						<div className="avatar-wrap">
							<img src="./images/men-1.jpg" alt="" />
						</div>
						<div className="info-team-wrap">
							<h1>Matt Vail</h1>
							<span>AWS Startups</span>
						</div>
						<div className="overlay-card">
							<ul>
								<li>Chief of Staff at Songkick</li>
								<li>VP of Business Development at Songquick</li>
								<li>VP of sales at Lyte</li>
							</ul>
						</div>
					</div>
					<div
						className="mentor-card"
						data-aos="fade-in"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="false"
						data-aos-anchor-placement="top-center"
					>
						<div className="avatar-wrap">
							<img src="./images/men-2.jpg" alt="" />
						</div>
						<div className="info-team-wrap">
							<h1>Martin Giese</h1>
							<span>Startup Coach and Investor</span>
						</div>
						<div className="overlay-card">
							<ul>
								<li>Author of Book "Fast Forward - B2B Sales for Startups"</li>
								<li>Managing Director and Owner at Cambridge Ventures UG</li>
								<li>Managing Director at XPRENEURS incubator</li>
							</ul>
						</div>
					</div>
					<div
						className="mentor-card"
						data-aos="fade-right"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="false"
						data-aos-anchor-placement="top-center"
					>
						<div className="avatar-wrap">
							<img src="./images/men-3.jpg" alt="" />
						</div>
						<div className="info-team-wrap">
							<h1>Dr. Arthur Krebbers</h1>
							<span>Head of Climate and ESG Capital Markets, Corporates at NatWest Markets</span>
						</div>
						<div className="overlay-card">
							<ul>
								<li>Director, Financing & Risk Solutions at NatWest</li>
								<li>Founder at Krebbers Ventures</li>
								<li>Business mentor at Virgin StartUp</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="main-mentor-wrap">
					<div
						className="mentor-card"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="false"
						data-aos-anchor-placement="top-center"
					>
						<div className="avatar-wrap">
							<img src="./images/women-1.jpg" alt="" />
						</div>
						<div className="info-team-wrap">
							<h1>Maria Manuel Seabra da Costa0</h1>
							<span>Member of Audit Board at CGD</span>
						</div>
						<div className="overlay-card">
							<ul>
								<li>Member of Audit Board & Member of Risk Committee at SIBS</li>
								<li>Member of the Supervisory board at OutSystems</li>
								<li>Harvard graduation on Corporate Governance</li>
							</ul>
						</div>
					</div>
					<div
						className="mentor-card"
						data-aos="fade-in"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="false"
						data-aos-anchor-placement="top-center"
					>
						<div className="avatar-wrap">
							<img src="./images/men-4.jpg" alt="" />
						</div>
						<div className="info-team-wrap">
							<h1>Christopher Pardo</h1>
							<span>Principal PM at Microsoft</span>
						</div>
						<div className="overlay-card">
							<ul>
								<li>Ex VP of Innovation at D&B</li>
								<li>Ex IBM</li>
								<li>Founding member at ECN</li>
							</ul>
						</div>
					</div>
					<div
						className="mentor-card"
						data-aos="fade-right"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="false"
						data-aos-anchor-placement="top-center"
					>
						<div className="avatar-wrap">
							<img src="./images/men-5.jpg" alt="" />
						</div>
						<div className="info-team-wrap">
							<h1>Gerrit McGowan</h1>
							<span>CEO at Rainmaking Venture Studios</span>
						</div>
						<div className="overlay-card">
							<ul>
								<li>Investor at Brainfood Ventures</li>
								<li>Founder and Host at "the Most Awesome Founder Podcast"</li>
								<li>Founder at WHU Accelerator</li>
								<li>​Founder at Kula.com</li>
							</ul>
						</div>
					</div>
					<div
						className="mentor-card"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="false"
						data-aos-anchor-placement="top-center"
					>
						<div className="avatar-wrap">
							<img src="./images/men-6.jpg" alt="" />
						</div>
						<div className="info-team-wrap">
							<h1>João Tiago Ascensão</h1>
							<span>Senior Director of Research, AI at Feedzai</span>
						</div>
						<div className="overlay-card">
							<ul>
								<li>Founder LP at Shilling</li>
								<li>Senior Manager at Farfetch</li>
								<li>Head of Data at Uniplaces</li>
								<li>Senior Market Research Analyst at ComparaJá</li>
							</ul>
						</div>
					</div>
					<div
						className="mentor-card"
						data-aos="fade-right"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="false"
						data-aos-anchor-placement="top-center"
					>
						<div className="avatar-wrap">
							<img src="./images/men-7.jpg" alt="" />
						</div>
						<div className="info-team-wrap">
							<h1>João Menano</h1>
							<span>Product at Google</span>
						</div>
						<div className="overlay-card">
							<ul>
								<li>Co-Founder and CEO at James (formerly CrowdProcess)</li>
								<li>Marketing Research at Fidelidade</li>
							</ul>
						</div>
					</div>
				</div>
				<img src="./images/team.gif" className="img-men" />
			</section>
		</main>
	);
}

export default AboutUs;
