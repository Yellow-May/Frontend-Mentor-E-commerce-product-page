import * as React from 'react';
import { AppContext } from '../store';
import iconCart from '../images/icon-cart-white.svg';
import iconMinus from '../images/icon-minus.svg';
import iconPlus from '../images/icon-plus.svg';

const ItemInfo = () => {
	const {
		actions: { addToCart },
	} = React.useContext(AppContext);
	const [amount, setAmount] = React.useState(0);

	const handlePlus = () => setAmount(prev => ++prev);
	const handleMinus = () => amount > 0 && setAmount(prev => --prev);

	const handleAddToCart = () => {
		addToCart(amount);
		setAmount(0);
	};

	return (
		<section className='item-info'>
			<h1>Sneaker Company</h1>
			<h2>Fall Limited Edition Sneakers</h2>
			<p>
				These low-profile sneakers are your perfect casual wear companion. Featuring a durable
				rubber outer sole, they’ll withstand everything the weather can offer.
			</p>
			<div className='first'>
				<div>
					<p>$125.00</p>
					<span>50%</span>
				</div>
				<span>$250.00</span>
			</div>
			<div className='second'>
				<div>
					<button onClick={handleMinus}>
						<img src={iconMinus} alt='minus' />
					</button>
					<span>{amount}</span>
					<button onClick={handlePlus}>
						<img src={iconPlus} alt='plus' />
					</button>
				</div>
				<button title='add to cart' disabled={amount < 1} onClick={handleAddToCart}>
					<img src={iconCart} alt='cart' className='w-5 mb-1' />
					<span>Add to cart</span>
				</button>
			</div>
		</section>
	);
};

export default ItemInfo;
