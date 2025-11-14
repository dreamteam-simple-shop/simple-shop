import { LuFacebook } from 'react-icons/lu';
import { LuInstagram } from 'react-icons/lu';
import { LuTwitter } from 'react-icons/lu';
import { LuYoutube } from 'react-icons/lu';
import { LuCopyleft } from 'react-icons/lu';

import Link from 'next/link';

function Socials() {
	return (
		<div className="flex flex-col gap-8 w-1/3">
			<h2 className="uppercase tracking-tight">Modernshop</h2>
			<p className="text-gray-500">
				Discover modern fashion essentials designed for the contemporary lifestyle.
			</p>
			<div className="flex flex-row gap-8">
				<LuFacebook />
				<LuInstagram />
				<LuTwitter />
				<LuYoutube />
			</div>
		</div>
	);
}

function ShopLinks() {
	return (
		<div className="flex flex-col gap-8">
			<h2>Shop</h2>
			<ul className="flex flex-col gap-4 text-gray-500 text-sm">
				<li>
					<Link href="/" className="hover:text-gray-900">New Arrivals</Link>
				</li>
				<li>
					<Link href="/" className="hover:text-gray-900">Men</Link>
				</li>
				<li>
					<Link href="/" className="hover:text-gray-900">Women</Link>
				</li>
				<li>
					<Link href="/" className="hover:text-gray-900">Accessories</Link>
				</li>
				<li>
					<Link href="/" className="hover:text-gray-900">Sale</Link>
				</li>
			</ul>
		</div>
	);
}

function CustomerLinks() {
	return (
		<div className="flex flex-col gap-8">
			<h2>Help</h2>
			<ul className="flex flex-col gap-4 text-gray-500 text-sm">
				<li>
					<Link href="/" className="hover:text-gray-900">Customer Service</Link>
				</li>
				<li>
					<Link href="/" className="hover:text-gray-900">My Account</Link>
				</li>
				<li>
					<Link href="/" className="hover:text-gray-900">Find a Store</Link>
				</li>
				<li>
					<Link href="/" className="hover:text-gray-900">Shipping & Returns</Link>
				</li>
				<li>
					<Link href="/" className="hover:text-gray-900">Contact Us</Link>
				</li>
			</ul>
		</div>
	);
}

function Newsletter() {
	return (
		<div className="flex flex-col gap-8 w-1/4">
			<h2>Newsletter</h2>
			<p className="text-gray-500">Subscribe to get special offers and updates.</p>
            <div className="flex flex-row gap-2">
                <input type="email" placeholder="Your email" className="w-full p-2 rounded-md outline-none bg-gray-200" />
                <button className="bg-black text-white p-2 rounded-md hover:bg-gray-800 transition-colors duration-300 cursor-pointer">Subscribe</button>
            </div>
		</div>
	);
}

export default function Footer() {
	return (
		<footer className="flex flex-col gap-4 border-t border-gray-200 bg-gray-100">
			<div className="flex flex-row justify-between border-b border-gray-200 mx-10 py-10">
				<Socials />
				<ShopLinks />
				<CustomerLinks />
				<Newsletter />
			</div>
			<div className="flex flex-row justify-between items-center px-10 pb-15">
				<p className="text-gray-500 flex flex-row gap-2 items-center text-sm">
					<LuCopyleft className="text-gray-500" /> 2025 Modernshop. No rights reserved.
				</p>
                <ul className="flex flex-row gap-4 text-gray-500 text-sm">
                    <li><Link href="/" className="hover:text-gray-900">Privacy Policy</Link></li>
                    <li><Link href="/" className="hover:text-gray-900">Terms of Service</Link></li>
                    <li><Link href="/" className="hover:text-gray-900">Cookie Policy</Link></li>
                </ul>
			</div>
		</footer>
	);
}
