import React, { useState, useEffect } from 'react';
function Demo() {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ msg, setMsg ] = useState('');

	const nameHandler = (e) => setName(e.target.value);
	const emailHandler = (e) => setEmail(e.target.value);
	const msgHandler = (e) => setMsg(e.target.value);
	const formHandler = async () => {
		try {
			await fetch('http://localhost:3000/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, email, msg })
			});
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<main className="contact-sec">
			<section className="demo-con">
				<div className="overlay" />
				<section className="hero-demo-info">
					<h1>Try Our Demo</h1>
				</section>
			</section>
			<section className="contact-form-con">
				<p>Feel free to send us an email and we will get back to you ASAP!</p>
				<div className="from-con">
					<div className="form-wrap">
						<div className="inp-wrap">
							<h1>Name:</h1>
							<input
								value={name}
								type={'text'}
								className="inp-f"
								placeholder="Name"
								onChange={nameHandler}
								required
							/>
						</div>
						<div className="inp-wrap">
							<h1>Email:</h1>
							<input
								value={email}
								type={'email'}
								className="inp-f"
								placeholder="Email"
								onChange={emailHandler}
								required
							/>
						</div>
						<div className="inp-wrap">
							<h1>Message:</h1>
							<textarea
								value={msg}
								className="inp-f"
								placeholder="Message"
								onChange={msgHandler}
								rows={5}
							/>
						</div>
						<div className="sub-btn-wrap">
							<button onClick={formHandler} className="sub-btn">
								Send
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Demo;
