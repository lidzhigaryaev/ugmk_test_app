import React, { ChangeEventHandler, FC } from 'react';
import { TFilterValue, FilterValuesEnum } from '../../interfaces';
import './style.css';

interface SelectProps {
	value: TFilterValue;
	onChange: ChangeEventHandler<HTMLSelectElement>;
}

const Select: FC<SelectProps> = ({ value, onChange }) => (
	<div className="select-wrapper">
		<label htmlFor="products-filter">Фильтр по типу продукции</label>
		<select value={value} id="products-filter" onChange={onChange}>
			<option value={FilterValuesEnum.All}>Все продукты</option>
			<option value={FilterValuesEnum.Product1}>Продукт 1</option>
			<option value={FilterValuesEnum.Product2}>Продукт 2</option>
		</select>
	</div>
);

export default Select;
