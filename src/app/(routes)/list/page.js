import ProductList from '@/app/components/ProductList';
import Filter from '@/app/components/Filter';
import { Suspense } from 'react';

async function ProductListContainer({ searchParams }) {
	'use client';
	const { category, title, search } = await searchParams;
	return (
		<>
			<Filter search={search} title={title || `Results for "${search}":`} />
			<ProductList category={category} search={search} />
		</>
	);
}

export default function List({ searchParams, title }) {
	return (
		<>
			<main className="">
				<Suspense fallback={<div>Loading...</div>}>
					<ProductListContainer searchParams={searchParams} />
				</Suspense>
			</main>
		</>
	);
}
