import { useState, useEffect } from 'react';
import { api } from '../constants';
import { IProduct } from '../interfaces';

const useFetchProducts = (params = '') => {
	const { baseUrl, products: productsUrl } = api;

	const [products, setProducts] = useState<IProduct[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const getProducts = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(`${baseUrl}${productsUrl}${params}`);
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const result = await response.json();
				setProducts(result);
			} catch (error) {
				console.log('error :>> ', error);
			} finally {
				setIsLoading(false);
			}
		};

		getProducts();
	}, []);

	return { products, isLoading };
};

export default useFetchProducts;
