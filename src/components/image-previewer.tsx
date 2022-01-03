import * as React from 'react';

import Modal from './image-previewer-modal';
import useWindowDimensions from '../hooks/use-window-dimensions';
import iconPrev from '../images/icon-previous.svg';
import iconNext from '../images/icon-next.svg';
import { productImagesLarge, productImagesThumb } from '../libs/product-images';

const ImagePreviewer = () => {
	const { width } = useWindowDimensions();
	const [current, setCurrent] = React.useState(0);
	const [modalOn, setModal] = React.useState(false);

	if (width >= 960)
		return (
			<section className='image-previewer desktop-view'>
				<h1 className='hidden'>Image Preview</h1>
				<img
					src={productImagesLarge[current].src}
					alt={productImagesLarge[current].alt}
					onClick={() => setModal(true)}
				/>
				<div className='selector'>
					{productImagesThumb.map(({ alt, src }, index) => (
						<button
							key={index}
							title={alt}
							className={current === index ? 'current' : ''}
							style={{ backgroundImage: `url(${src})` }}
							onClick={() => setCurrent(index)}></button>
					))}
				</div>
				<Modal
					current={current}
					visible={modalOn}
					setCurrent={setCurrent}
					onHide={() => setModal(false)}
				/>
			</section>
		);

	return (
		<section className='image-previewer mobile-view'>
			<h1 className='hidden'>Image Preview</h1>
			<div style={{ left: width * -current }}>
				{productImagesLarge.map(({ alt, src }, index) => (
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
