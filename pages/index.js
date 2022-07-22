import Head from 'next/head';
import ChooseUs from '../components/chooseUs/chooseUs';
import DemoSection from '../components/DemoSection/demo';
import HeroSection from '../components/heroSection/hero';
import ManageSection from '../components/manageSection/manage';
import OurProduct from '../components/ourProduct/product';
export default function Home() {
	return (
		<div>
			<Head />
			<HeroSection />
			<ManageSection />
			<OurProduct />
			<ChooseUs />
			<DemoSection />
		</div>
	);
}
