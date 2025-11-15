'use client';

import { useState } from 'react';
    
function FilterButton({ name, active }) {
    const [isActive, setIsActive] = useState(active);
    return (
        <button
            // onClick={() => setIsActive(true)}
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
				<FilterButton name="All" active={true} />
				<FilterButton name="Clothing" active={false} />
				<FilterButton name="Footwear" active={false} />
				<FilterButton name="Accessories" active={false} />
			</div>
		</div>
	);
}
