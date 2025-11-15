'use client';
import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';
import { MdFavoriteBorder } from 'react-icons/md';
import { IoCartOutline } from 'react-icons/io5';
import ShoppingCart from './ShoppingCart';
import { useState } from 'react';

function Logo() {
	return (
		<Link href="/">
			<h1 className="text-md uppercase tracking-tight">Modernshop</h1>
		</Link>
	);
}

function Navigation() {
	return (
		<nav>
			<ul className="flex flex-row gap-6">
				<li>
					<Link href="/">New Arrivals</Link>
				</li>
				<li>
					<Link href="/">Men</Link>
				</li>
				<li>
					<Link href="/">Women</Link>
				</li>
				<li>
					<Link href="/">Accessories</Link>
				</li>
				<li>
					<Link href="/">Sale</Link>
				</li>
			</ul>
		</nav>
	);
}

function Favorite() {
	return (
		<div className="flex flex-row gap-2">
			<MdFavoriteBorder className="text-gray-500" />
		</div>
	);
}

function Cart() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button
				className={`flex flex-row gap-2 ${isOpen ? '' : 'cursor-pointer'}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<IoCartOutline className="text-gray-500" />
			</button>
			<ShoppingCart isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
}

function Search() {
	return (
		<div className="flex flex-row gap-2 bg-gray-100 rounded-full pt-1 ps-3 pb-1 items-center">
			<IoIosSearch className="text-gray-500" />
			<input
				type="text"
				placeholder="Search products..."
				className="bg-transparent outline-none text-sm"
			/>
		</div>
	);
}

export default function Header() {
	return (
		<header className="flex flex-row justify-around items-center p-4 fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
			<Logo />
			<Navigation />
			<Search />
			<div className="flex flex-row gap-6">
				<Favorite />
				<Cart />
			</div>
		</header>
	);
}
