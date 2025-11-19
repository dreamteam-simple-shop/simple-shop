'use client';

import { IoClose } from 'react-icons/io5';
import { FiShoppingBag } from 'react-icons/fi';
import { IoBagCheckOutline } from 'react-icons/io5';
import { CiCircleRemove } from 'react-icons/ci';
import useStore from '@/store/Cart';
import { useEffect, useState } from 'react';
import Image from 'next/image';

let cartItems = '0';

function DarkOverlay({ isOpen, setIsOpen }) {
	return (
		<div
			className={`fixed top-0 left-0 w-screen h-screen bg-black z-40 transition-opacity duration-900 ease-in-out ${isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
			onClick={() => setIsOpen(false)}
		></div>
	);
}

function CartItem({ id, title, thumbnail, price, discountPercentage, category, cartTotal }) {
	const { cart, updateCart, toggleCart } = useStore();
	const item = cart.find((elm) => elm.id === id);
	const [isQuant, setIsQuant] = useState(item.quantity);
	const displayPrice =
		discountPercentage > 10
			? Math.round((price - (price * discountPercentage) / 100) * 100) / 100
			: price;
	return (
		<div className="flex flex-row gap-4 justify-between w-full h-40 border border-gray-200 p-4 rounded-4xl">
			<figure className="grid grid-cols-2">
				<button
					className="col-1 row-1 absolute cursor-pointer"
					onClick={() => toggleCart(id)}
				>
					<CiCircleRemove className="text-gray-500" />
				</button>
				<Image
					className="col-span-2 row-1"
					src={thumbnail}
					alt={title}
					width={100}
					height={100}
				/>
			</figure>
			<div className="flex flex-col gap-2 items-start justify-between">
				<div>
					<h1 className="text-md font-medium">{title}</h1>
					<p className="text-gray-500 text-sm capitalize">{category}</p>
				</div>
				<div className="flex border border-gray-400 rounded-xl w-25 items-center justify-end">
					<button
						className="cursor-pointer border-r border-gray-400 px-2 h-full w-1/3 rounded-l-xl hover:bg-gray-200 transition-colors duration-300"
						onClick={() => {
							if (isQuant > 0) {
								const newQuant = isQuant - 1;
								setIsQuant(newQuant);
								updateCart(id, price, newQuant);
							}
						}}
					>
						<p>-</p>
					</button>
					<p
						className="text-center p-1 text-sm w-1/3 items-center justify-center self-center"
						onChange={(e) => {
							setIsQuant(Math.max(0, Number(e.target.value)));
						}}
					>
						{isQuant}
					</p>
					<button
						className="cursor-pointer border-l border-gray-400 h-full w-1/3 rounded-r-xl hover:bg-gray-200 transition-colors duration-300"
						onClick={() => {
							const newQuant = isQuant + 1;
							setIsQuant(newQuant);
							updateCart(id, price, newQuant);
						}}
					>
						<p> +</p>
					</button>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<h1 className="text-sm font-medium price">
					${(displayPrice * isQuant).toFixed(2)}
				</h1>
				<h2 className="text-gray-500 text-xs line-through">
					{discountPercentage > 10 ? '$ ' + (price * isQuant).toFixed(2) : ''}
				</h2>
			</div>
		</div>
	);
}

function FetchCartItem({ id, cartTotal }) {
	const [product, setProduct] = useState(null);

	useEffect(() => {
		async function fetchProduct() {
			const response = await fetch(`https://dummyjson.com/products/${id}`);
			const data = await response.json();
			setProduct(data);
		}
		fetchProduct();
	}, [id]);

	return product ? (
		<CartItem
			id={id}
			title={product.title}
			thumbnail={product.thumbnail}
			price={product.price}
			category={product.category}
			cartTotal={cartTotal}
			discountPercentage={product.discountPercentage}
		/>
	) : null;
}

function GetCartItems({ setIsOpen, cartTotal }) {
	const { cart } = useStore();
	console.log(cart);
	if (cart.length > 0) {
		cartItems = cart.length.toString();
	}
	console.log(cartItems);
	return cart.length > 0 ? (
		cart.map((item) => {
			// return <h1 key={item}>{item}</h1>
			return <FetchCartItem id={item.id} key={item.id} cartTotal={cartTotal} />;
		})
	) : (
		<EmptyCart setIsOpen={setIsOpen} />
	);
}

function EmptyCart({ setIsOpen }) {
	return (
		<div className="flex flex-col gap-4 items-center justify-center self-center w-full h-full">
			<FiShoppingBag className="text-gray-300 h-16 w-16" />
			<h2 className="text-md ">Your cart is empty</h2>
			<p className="text-gray-500">Add some products to get started!</p>
			<button
				className="bg-black text-white p-2 rounded-xl hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
				onClick={() => setIsOpen(false)}
			>
				Continue Shopping
			</button>
		</div>
	);
}

function CartItems({ isOpen, setIsOpen, cartItems, cartTotal }) {
	return (
		<div
			className={`fixed top-0 right-0 min-w-[400px] w-1/3 h-screen bg-white z-50 p-4 flex flex-col gap-5 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
			onClick={(e) => e.stopPropagation()}
		>
			<div className="flex flex-row w-full justify-between items-center self-start">
				<h1 className="text-xl font-semibold">Shopping Cart ({cartItems})</h1>
				<button
					className="flex flex-row gap-2 cursor-pointer"
					onClick={() => setIsOpen(false)}
				>
					<IoClose className="text-gray-500" />
				</button>
			</div>
			<GetCartItems setIsOpen={setIsOpen} cartTotal={cartTotal} />
			<div className="text-sm font-medium w-full text-right border-t border-gray-200 mt-auto pt-4 self-end">
				<div className="w-full flex flex-row justify-between">
					<div className="">Total:</div>
					<div className="">${cartTotal.toFixed(2)}</div>
				</div>
			</div>
			<button className="bg-black text-white text-lg p-2 border border-black items-center justify-center gap-2 flex rounded-xl hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
				<IoBagCheckOutline className="w-auto h-6 self-center" /> Checkout
			</button>
		</div>
	);
}

export default function ShoppingCart({ isOpen, setIsOpen }) {
	const { cart } = useStore();
	let cartTotal = 0;
	cart.forEach((item) => {
		cartTotal += item.price * item.quantity;
	});
	console.log(cartTotal);
	return (
		<>
			<DarkOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
			<CartItems
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				cartItems={cartItems}
				cartTotal={cartTotal}
			/>
		</>
	);
}
