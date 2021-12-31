import * as React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import ImagePreviewer from './components/image-previewer';
import ItemInfo from '../components/item-info';

export default function App() {
	return (
		<React.Fragment>
			<Header />
			<main>
				<ImagePreviewer />
				<ItemInfo />
			</main>
			<Footer />
		</React.Fragment>
	);
}
