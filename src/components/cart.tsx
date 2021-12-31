import * as React from 'react';
import { AppContext } from '../store';

import itemThumbnail from '../images/image-product-1-thumbnail.jpg';
import iconDelete from '../images/icon-delete.svg';

interface PropsInterface {
	visible: boolean;
}

const Cart: React.FC<PropsInterface> = props => {
	const {
		state: { amount },
		actions: { deleteCart },
	} = React.useContext(AppContext);
	return (
		<div className={props.visible ? 'cart' : 'hidden'}>
			<h1>Cart</h1>
			<div>
				{amount > 0 ? (
					<React.Fragment>
						<div>
							<img src={itemThumbnail} alt='item thumbnail' className='w-12 h-12 rounded-md' />
							<div className='w-[70%]'>
								<h2 className='w-[85%] text-md truncate'>Autumn Limited Edition Sneakers</h2>
								<p>
									$125.00 x {amount} <span className='font-bold'>{`$${125 * amount}.00`}</span>
								</p>
							</div>
							<button title='delete' className='min-w-max' onClick={deleteCart}>
								<img src={iconDelete} alt='delete' />
							</button>
						</div>
						<button title='checkout'>Checkout</button>
					</React.Fragment>
				) : (
					<p className='text-blue-dark-grayish'>Your cart is empty</p>
				)}
			</div>
		</div>
	);
};

export default Cart;
