import * as React from 'react';
import { AppContext } from '../store';
import Cart from './cart';

import logo from '../images/logo.svg';
import iconMenu from '../images/icon-menu.svg';
import iconClose from '../images/icon-close.svg';
import iconCart from '../images/icon-cart.svg';
import imgAvatar from '../images/image-avatar.png';

const navLinks = [
	{ label: 'Collections', link: '/' },
	{ label: 'Men', link: '/' },
	{ label: 'Women', link: '/' },
	{ label: 'About', link: '/' },
	{ label: 'Contact', link: '/' },
];

export default function Header() {
	const {
		state: { amount },
	} = React.useContext(AppContext);
	const [displayNav, openNav] = React.useState<boolean>(false);
	const [displayCart, toggleCart] = React.useState<boolean>(false);

	return (
		<header className={displayNav ? 'mobile-before' : ''}>
			<button title='open menu' onClick={() => openNav(true)}>
				<img src={iconMenu} alt='open menu' />
			</button>
			<nav>
				<img src={logo} alt='sneakers' className='lg:mb-1' />
				<div className={displayNav ? 'left-0' : '-left-full'}>
					<button title='close menu' className='mb-10 lg:hidden' onClick={() => openNav(false)}>
						<img src={iconClose} alt='close menu' />
					</button>
					<ul>
						{navLinks.map(({ label, link }) => (
							<li key={label}>
								<a href={link}>{label}</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
			<div className='clickables'>
				<button title='cart' onClick={() => toggleCart(prev => !prev)}>
					<img src={iconCart} alt='cart' className='w-5 h-5' />
					<span className={amount > 0 ? 'badge' : 'hidden'}>{amount}</span>
				</button>
				<img src={imgAvatar} alt='avatar' />
			</div>
			<Cart visible={displayCart} />
		</header>
	);
}
