import React from 'react';

export const EggList = (props) => {
	return (
		<ul>
			{props.eggs.map((egg, i) => (
				<EasterEgg key={i} name={egg}/>
			))}{' '}
		</ul>
	);
};

export const EasterEgg = (props) => {
	return <li>{props.name}</li>
};
