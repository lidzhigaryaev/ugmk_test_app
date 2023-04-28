import React, { useState, FC, ChangeEvent } from 'react';
import { useFetchProducts } from '../hooks';
import { MyBarChart, Select } from '../components';
import { getBarChartData } from '../utils/products';
import { FilterValuesEnum, TFilterValue } from '../interfaces';

const Factories: FC = () => {
	const defaultFilterValue =
		(localStorage.getItem('filterValue') as TFilterValue) ??
		FilterValuesEnum.All;

	const [filterValue, setFilterValue] =
		useState<TFilterValue>(defaultFilterValue);

	const { products, isLoading } = useFetchProducts();

	const barChartData = getBarChartData(products, filterValue);

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setFilterValue(value as TFilterValue);
		localStorage.setItem('filterValue', value);
	};

	if (isLoading) {
		return <div>Загрузка...</div>;
	}

	return (
		<>
			<Select value={filterValue} onChange={handleSelectChange} />
			<MyBarChart data={barChartData} />
		</>
	);
};

export default Factories;
