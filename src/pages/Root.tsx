import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Root: FC = () => (
	<div className="container">
		<Outlet />
	</div>
);

export default Root;
