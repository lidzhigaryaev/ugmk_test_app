import { createBrowserRouter } from 'react-router-dom';
import { Factories, FactoryDetails, Root } from './pages';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <Factories />,
			},
			{
				path: '/details/:factoryId/:monthNumber',
				element: <FactoryDetails />,
			},
		],
	},
]);
