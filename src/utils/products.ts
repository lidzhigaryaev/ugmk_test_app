import { months } from '../constants';
import { TFilterValue, IProduct } from '../interfaces';

interface IGetFactoryValue {
	products: IProduct[];
	factoryId: IProduct['factory_id'];
	monthIndex: number;
	filterValue: TFilterValue;
}

const getValidProducts = (products: IProduct[]) =>
	products.filter(
		({ date, product1, product2 }) => date && product1 && product2
	);

const getProductsByFactoryId = (products: IProduct[], id: number) =>
	products.filter((product) => product.factory_id === id);

const getProductsByMonth = (products: IProduct[], monthNumber: number) =>
	products.filter(
		(product) => Number(product.date!.split('/')[1]) === monthNumber
	);

const getProductsValueByFilter = (
	products: IProduct[],
	filterValue: TFilterValue
) =>
	products.reduce((acc, { product1, product2 }) => {
		switch (filterValue) {
			case 'product1':
				return acc + product1!;
			case 'product2':
				return acc + product2!;
			default:
				return acc + product1! + product2!;
		}
	}, 0);

const getFactoryValue = ({
	products,
	factoryId,
	monthIndex,
	filterValue,
}: IGetFactoryValue) => {
	const validProducts = getValidProducts(products);

	const factoryProducts = getProductsByFactoryId(validProducts, factoryId);

	const factoryProductsByMonth = getProductsByMonth(
		factoryProducts,
		monthIndex
	);

	const factoryValueByMonth = getProductsValueByFilter(
		factoryProductsByMonth,
		filterValue
	);

	return factoryValueByMonth;
};

export const getBarChartData = (
	products: IProduct[],
	filterValue: TFilterValue
) =>
	months.map((monthName, i) => ({
		month: { number: i + 1, name: monthName },
		values: {
			factoryAValueByMonth: getFactoryValue({
				products,
				monthIndex: i + 1,
				factoryId: 1,
				filterValue,
			}),
			factoryBValueByMonth: getFactoryValue({
				products,
				monthIndex: i + 1,
				factoryId: 2,
				filterValue,
			}),
		},
	}));

export const getPieChartData = (
	products: IProduct[],
	factoryId: IProduct['factory_id'],
	monthIndex: number
) => {
	const product1Value = getFactoryValue({
		products,
		factoryId,
		monthIndex,
		filterValue: 'product1',
	});

	const product2Value = getFactoryValue({
		products,
		factoryId,
		monthIndex,
		filterValue: 'product2',
	});

	return [
		{ name: 'Продукт 1', value: product1Value },
		{ name: 'Продукт 2', value: product2Value },
	];
};
