import { Suspense } from 'react';
import { params } from 'next/navigation';
import ProductSingle from '@/app/components/ProductSingle';

async function FetchProduct({ params }) {
	const { id } = await params;
	const response = await fetch(`https://dummyjson.com/products/${id}`);
	const product = await response.json();
	return (
		<ProductSingle
			id={product.id}
			title={product.title}
			thumbnail={product.thumbnail}
			category={product.category}
			description={product.description}
			discountPercentage={product.discountPercentage}
			price={product.price}
			reviewAmount={product.reviews.length}
		/>
	);
}

export default function Detalje({ params }) {
	return (
		<>
			<main className="py-20">
				<Suspense fallback={<div>Loading...</div>}>
					<FetchProduct params={params} />
				</Suspense>
			</main>
		</>
	);
}
