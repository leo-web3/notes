import { Analytics } from '@vercel/analytics/react';

function Notes({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}

export default Notes;