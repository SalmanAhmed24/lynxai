function Navbar() {
	return (
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
	);
}

export default Navbar;
