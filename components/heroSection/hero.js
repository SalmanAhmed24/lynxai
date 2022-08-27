import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
function HeroSection() {
	const router = useRouter();
	return (
		<main className="bg-hero-con">
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
					<h1 className="upper-h">A data driven platform that makes ESG Investments Efficient</h1>
				</div>
				<div className="mobile-hero">
					<img src="./images/logo.png" />
					<h1 className="upper-h">A data driven platform that makes ESG Investments Efficient</h1>
				</div>
				<div className="hero-btn-wrap">
					<span className="high-btn" onClick={() => router.push('/demo')}>
						Request a demo
					</span>
					<span className="simple-btn" onClick={() => router.push('/aboutUs')}>
						Know More
					</span>
				</div>
			</motion.section>
		</main>
	);
}

export default HeroSection;
