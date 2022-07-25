import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
function Navbar() {
	const [ drawerFlag, setDrawerFlag ] = useState(false);
	const drawerHandler = () => {
		setDrawerFlag(!drawerFlag);
	};
	return (
		<section>
			<nav className="nav-cus">
				<div className="logo-wrap">
					<img src="./images/logo.png" className="logo" />
				</div>
				<ul className="links">
					<li>Home</li>
					<li>EU Taxonomy</li>
					<li>About Us</li>
				</ul>
				<div className="cat-btn-wrap">
					<span className="simple-btn">Contact Us</span>
					<span className="high-btn">Request a demo</span>
				</div>
			</nav>
			<nav className="mobile">
				<div className="bar-wrap">
					<img onClick={() => drawerHandler()} className="bar" src="./images/bar.png" />
				</div>
				<Drawer anchor={'left'} open={drawerFlag} onClose={() => drawerHandler()}>
					<div className="logo-inner-wrap">
						<img src="./images/logo.png" className="logo-inner" />
					</div>
					<div className="inner-content">
						<p>Home</p>
						<p>EU Taxonomy</p>
						<p>About Us</p>
					</div>
					<div className="cat-btn-inner-wrap">
						<span className="simple-btn">Contact Us</span>
						<span className="high-btn">Request a demo</span>
					</div>
				</Drawer>
			</nav>
		</section>
	);
}

export default Navbar;
