import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

interface MyBarChartProps {
	data: Array<{
		month: { number: number; name: string };
		values: { factoryAValueByMonth: number; factoryBValueByMonth: number };
	}>;
}

const MyBarChart: FC<MyBarChartProps> = ({ data }) => {
	const navigate = useNavigate();

	const generateLink = (monthNumber: number, factoryId: number) =>
		navigate(`/details/${factoryId}/${monthNumber}`);

	return (
		<ResponsiveContainer width="100%" height="95%">
			<BarChart data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="month.name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar
					cursor="pointer"
					onClick={(data) => generateLink(data.month.number, 1)}
					dataKey="values.factoryAValueByMonth"
					name="Фабрика А"
					fill="#ff3333"
				/>
				<Bar
					cursor="pointer"
					onClick={(data) => generateLink(data.month.number, 2)}
					dataKey="values.factoryBValueByMonth"
					name="Фабрика Б"
					fill="#442bff"
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default MyBarChart;
