import { useRouter } from 'next/router';

function DemoSection() {
	const router = useRouter();

	return (
		<section className="demo-con">
			<div className="demo-wrap">
				<div className="demo-h-wrap">
					<h1>
						Try <span>Our Demo</span>
					</h1>
				</div>
				<div className="demo-btn">
					<span className="simple-btn" onClick={() => router.push('/aboutUs')}>
						Know More
					</span>
					<span className="high-btn" onClick={() => router.push('/demo')}>
						Try Our Demo
					</span>
				</div>
			</div>
			<div className="overlay" />
		</section>
	);
}

export default DemoSection;
