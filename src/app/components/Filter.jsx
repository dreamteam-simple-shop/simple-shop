'use client';

import { Suspense } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

function FilterButton({ name, category }) {
	let isActive = false;
	const router = useRouter();
	const searchParams = useSearchParams();
	let currentCategory = searchParams.get('category');

	if (currentCategory === null) {
		currentCategory = 'All';
		isActive = currentCategory === category;
	} else {
		isActive = currentCategory === category;
	}

	return (
		<button
			onClick={() => {
				if (category === 'All') {
					router.push(`/`);
				} else {
					router.push(`/?category=${category}`);
				}
			}}
			className={`
                rounded-full px-6 py-2 transition-colors duration-300 cursor-pointer
                ${
					isActive
						? 'bg-black text-white'
						: 'bg-white text-black border border-gray-300 hover:bg-black hover:text-white'
				}
            `}
		>
			{name}
		</button>
	);
}

export default function Filter() {
	return (
		<div className="mt-35 flex flex-col gap-8 items-center justify-center">
			<h1 className="text-xl font-medium">Featured Products</h1>
			<p className="text-gray-500 text-center max-w-2xl">
				Discover our handpicked selection of premium products designed to elevate your
				everyday style.
			</p>
			<div className="flex flex-row gap-4">
				<Suspense fallback={<div>Loading...</div>}>
					<FilterButton name="All" category="All" />
					<FilterButton name="Dresses" category="womens-dresses" />
					<FilterButton name="Shoes" category="womens-shoes" />
					<FilterButton name="Bags" category="womens-bags" />
				</Suspense>
			</div>
		</div>
	);
}
