import * as React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import ImagePreviewer from './components/image-previewer';
import ItemInfo from './components/item-info';

export default function App() {
	return (
		<React.Fragment>
			<Header />
			<main>
				<h1 className='hidden'>Sneaker</h1>
				<ImagePreviewer />
				<ItemInfo />
			</main>
			<Footer />
		</React.Fragment>
	);
}
