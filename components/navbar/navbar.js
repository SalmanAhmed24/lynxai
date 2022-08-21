import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import Drawer from '@mui/material/Drawer';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
function Navbar() {
	const [ scrollPosition, setScrollPosition ] = useState(0);
	const [ drawerFlag, setDrawerFlag ] = useState(false);
	const router = useRouter();
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const drawerHandler = () => {
		setDrawerFlag(!drawerFlag);
	};
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};
	const navigationHandler = (e) => {
		if (e.target.innerText == 'About Us') {
			router.push('/aboutUs');
		}
		if (e.target.innerText == 'Home') {
			router.push('/');
		}
		if (e.target.innerText == 'EU Taxonomy') {
			router.push('/euTaxonomy');
		}
		if (e.target.innerText == 'Contact Us') {
			router.push('/contact');
		}
	};
	return (
		<React.Fragment>
			<nav className={'nav-cus nav-cus-fixed scroll-navbar'}>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, x: -100, transition: { ease: 'easeInOut' } },
						visible: { opacity: 1, x: 0, transition: { delay: 0.3, ease: 'easeInOut' } }
					}}
					className="logo-wrap"
					onClick={() => router.push('/')}
				>
					<img src="./images/logo.png" className="logo" />
				</motion.div>
				<ul className="links" onClick={navigationHandler}>
					<motion.li
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0.5, y: -100, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, y: 0, transition: { delay: 0.6, ease: 'easeInOut' } }
						}}
					>
						Home
					</motion.li>
					<motion.li
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0.5, y: -100, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, y: 0, transition: { delay: 0.8, ease: 'easeInOut' } }
						}}
					>
						EU Taxonomy
					</motion.li>
					<motion.li
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0.5, y: -100, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, y: 0, transition: { delay: 1, ease: 'easeInOut' } }
						}}
					>
						About Us
					</motion.li>
				</ul>
				<div className="cat-btn-wrap">
					<motion.span
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0, x: 100, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, x: 0, transition: { delay: 1, ease: 'easeInOut' } }
						}}
						className="simple-btn"
						onClick={() => router.push('/contact')}
					>
						Contact Us
					</motion.span>
					<motion.span
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0, x: 200, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, x: 0, transition: { delay: 1.2, ease: 'easeInOut' } }
						}}
						className="high-btn"
						onClick={() => router.push('/demo')}
					>
						Request a demo
					</motion.span>
				</div>
			</nav>
			<nav className="mobile">
				<div className="bar-wrap">
					<p onClick={() => drawerHandler()} className="bar">
						&#9776;
					</p>
				</div>
				<Drawer anchor={'left'} open={drawerFlag} onClose={() => drawerHandler()}>
					<div className="logo-inner-wrap">
						<img onClick={() => router.push('/')} src="./images/logo.png" className="logo-inner" />
					</div>
					<div className="inner-content">
						<ul className="mobile-nav" onClick={navigationHandler}>
							<li>Home</li>
							<li>EU Taxonomy</li>
							<li>About Us</li>
						</ul>
					</div>
					<div className="cat-btn-inner-wrap">
						<span className="simple-btn" onClick={() => router.push('/contact')}>
							Contact Us
						</span>
						<span className="high-btn" onClick={() => router.push('/demo')}>
							Request a demo
						</span>
					</div>
				</Drawer>
			</nav>
		</React.Fragment>
	);
}

export default Navbar;
