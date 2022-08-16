import Footer from '../components/footer';
import Navbar from '../components/navbar/navbar';
import '../styles/globals.scss';
function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

export default MyApp;
