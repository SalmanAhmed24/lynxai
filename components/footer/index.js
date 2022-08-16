function Footer() {
	const footerHandler = (e) => console.log(e.target.innerText);
	return (
		<footer className="footer-con">
			<div className="logo-sec">
				<div className="logo">
					<img src="./images/logo.png" className="logo-footer" />
				</div>
				<p className="footer-p">LYNXAI a data-driven platform makes ESG Investment Efficient</p>
				<div className="req-demo">
					<h2>
						Try Our Demo<span>&#10140;</span>
					</h2>
				</div>
			</div>
			<div className="quick-link-sec">
				<h3 className="quick-links-h">Quick Links</h3>
				<ul className="footer-links" onClick={footerHandler}>
					<li>Home</li>
					<li>EU Taxonomy</li>
					<li>About Us</li>
					<li>Contact Us</li>
				</ul>
			</div>
			<div className="contact-sec">
				<h3 className="quick-links-h">Find Us</h3>
				<p>Feel free to contact us in any of thses platforms. You can also send us a call or email us.</p>
				<div className="social-icons-wrap">
					<img src="./images/fb.svg" className="icons" />
					<img src="./images/insta.svg" className="icons" />
					<img src="./images/link.svg" className="icons" />
				</div>
				<div className="contact-wrap">
					<a href="">
						<span>Phone:</span>090078601
					</a>
					<a href="">
						<span>Email:</span>lynxai.support@gmail.com
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
