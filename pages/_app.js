import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import '../styles/globals.scss';
function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<link href="http://fonts.cdnfonts.com/css/futura-md-bt" rel="stylesheet" />
				<link href="http://fonts.cdnfonts.com/css/souvenir" rel="stylesheet" />
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
