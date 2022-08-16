import React, { useState, useEffect } from 'react';
import AOS from 'aos';
function ManageSection() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<section
			className="manage-sec"
			data-aos="fade-in"
			data-aos-duration="500"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			data-aos-once="false"
			data-aos-anchor-placement="top-center"
		>
			<div
				className="manage-h-wrap"
				data-aos="fade-right"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-once="false"
				data-aos-anchor-placement="top-center"
			>
				<h1>We help you manage</h1>
				<p>EU Taxonomy</p>
				<ul>
					<li>We have an EU Taxonomy tool</li>
					<li>You can set your ESG standards</li>
					<li>Have your client&apos;s ESG standards controlled</li>
					<li>Create your Taxonomy Claim</li>
					<li>Match ESG standards with investments</li>
				</ul>
				<div className="high-btn-wrap">
					<span className="high-btn">See Our Product Demo</span>
				</div>
			</div>
			<div
				className="manage-img-wrap"
				data-aos="fade-left"
				data-aos-delay="1000"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-once="false"
				data-aos-anchor-placement="top-center"
			>
				{/* <img src="./images/eu-taxonomy-3.png" /> */}
			</div>
		</section>
	);
}

export default ManageSection;
