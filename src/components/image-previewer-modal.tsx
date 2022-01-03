import * as React from 'react';

import iconClose from '../images/icon-close-white.svg';
import iconPrev from '../images/icon-previous.svg';
import iconNext from '../images/icon-next.svg';
import { productImagesLarge, productImagesThumb } from '../libs/product-images';

interface PropsInterface {
	current: number;
	setCurrent: (index: number) => void;
	visible: boolean;
	onHide: () => void;
}

const ImagePreviewerModal: React.FC<PropsInterface> = ({
	current,
	setCurrent,
	visible,
	onHide,
}) => {
	return (
		<div className={visible ? 'modal' : 'hidden'}>
			<button title='close modal' onClick={onHide} className='mb-4 ml-[400px]'>
				<img src={iconClose} alt='close modal' />
			</button>
			<div className='previewer'>
				<div>
					<div className='w-[420px]' style={{ left: 420 * -current }}>
						{productImagesLarge.map(({ alt, src }, index) => (
							<img key={index} src={src} alt={alt} className='rounded-lg' />
						))}
					</div>
				</div>
				<button title='previous' disabled={current === 0} onClick={() => setCurrent(--current)}>
					<img src={iconPrev} alt='previous' />
				</button>
				<button title='next' disabled={current === 3} onClick={() => setCurrent(++current)}>
					<img src={iconNext} alt='next' />
				</button>
			</div>
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
		</div>
	);
};

export default ImagePreviewerModal;
