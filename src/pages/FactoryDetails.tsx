import React, { FC } from 'react';
import { MyPieChart } from '../components';
import { getPieChartData } from '../utils/products';
import { useParams } from 'react-router-dom';
import { IProduct } from '../interfaces';
import { useFetchProducts } from '../hooks';
import { months } from '../constants';

const FactoryDetails: FC = () => {
	const { factoryId, monthNumber } = useParams();

	const { products } = useFetchProducts(`?factory_id=${factoryId}`);

	const pieChartData = getPieChartData(
		products,
		Number(factoryId) as IProduct['factory_id'],
		Number(monthNumber)
	);

	const factoryIdText = factoryId === '1' ? 'А' : 'Б';
	const monthText = months[Number(monthNumber)];

	return (
		<>
			<h1>
				Статистика по продукции фабрики {factoryIdText} за {monthText}
			</h1>
			<MyPieChart data={pieChartData} />
		</>
	);
};

export default FactoryDetails;
