import React, { FC } from 'react';
import {
	PieChart,
	Pie,
	Legend,
	Tooltip,
	ResponsiveContainer,
	Cell,
} from 'recharts';

interface MyPieChartProps {
	data: Array<{ name: string; value: number }>;
}

const MyPieChart: FC<MyPieChartProps> = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" height="95%">
			<PieChart width={400} height={800}>
				<Pie
					dataKey="value"
					isAnimationActive={false}
					data={data}
					cx="50%"
					cy="50%"
					outerRadius={300}
					label
				>
					<Cell fill="#176608" />
					<Cell fill="#f0af17" />
				</Pie>
				<Tooltip />
				<Legend />
			</PieChart>
		</ResponsiveContainer>
	);
};

export default MyPieChart;
