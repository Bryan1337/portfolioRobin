import React from 'react';

interface ColorWrapperProps {
	color: string;
	children: React.ReactNode;
}
const ColorWrapper = ({ color, children }: ColorWrapperProps) => {

	return <span style={{ color }}>
		{children}
	</span>
}


export default ColorWrapper;