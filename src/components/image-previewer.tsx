import * as React from 'react';

import useWindowDimensions from '../hooks/use-window-dimensions';
import iconPrev from '../images/icon-previous.svg';
import iconNext from '../images/icon-next.svg';
import productOne from '../images/image-product-1.jpg';
import productTwo from '../images/image-product-2.jpg';
import productThree from '../images/image-product-3.jpg';
import productFour from '../images/image-product-4.jpg';

const items = [
	{ alt: 'Product One', src: productOne },
	{ alt: 'Product Two', src: productTwo },
	{ alt: 'Product Three', src: productThree },
	{ alt: 'Product Four', src: productFour },
];

const ImagePreviewer = () => {
	const { width } = useWindowDimensions();
	const [current, setCurrent] = React.useState(0);

	if (width >= 768)
		return (
			<section>
				<h1 className='hidden'>Image Preview</h1>
			</section>
		);

	return (
		<section className='image-previewer mobile-view '>
			<h1 className='hidden'>Image Preview</h1>
			<div style={{ left: width * -current }}>
				{items.map(({ alt, src }, index) => (
					<img key={index} src={src} alt={alt} />
				))}
			</div>
			<button title='previous' disabled={current === 0} onClick={() => setCurrent(prev => --prev)}>
				<img src={iconPrev} alt='previous' />
			</button>
			<button title='next' disabled={current === 3} onClick={() => setCurrent(prev => ++prev)}>
				<img src={iconNext} alt='next' />
			</button>
		</section>
	);
};

export default ImagePreviewer;
