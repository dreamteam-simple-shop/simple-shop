import ProductList from './components/ProductList';
import Hero from './components/Hero';
import Filter from './components/Filter';
import { Suspense } from 'react';

async function ProductListContainer({ searchParams }) {
	'use client';
	const { category } = await searchParams;
	return <ProductList category={category} />;
}

export default function Home({ searchParams }) {
	return (
		<>
			<main className="">
				<Hero />
				<Filter title="Featured Products" />
				<Suspense fallback={<div>Loading...</div>}>
					<ProductListContainer searchParams={searchParams} />
				</Suspense>
			</main>
		</>
	);
}
