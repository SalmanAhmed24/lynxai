import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
function ManageSection() {
	useEffect(() => {
		AOS.init();
	}, []);
	const router = useRouter();
	return (
		<section className="manage-sec">
			<div className="manage-h-wrap">
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
					<span className="high-btn" onClick={() => router.push('/demo')}>
						See Our Product Demo
					</span>
				</div>
			</div>
			<div className="manage-img-wrap">{/* <img src="./images/eu-taxonomy-3.png" /> */}</div>
		</section>
	);
}

export default ManageSection;
