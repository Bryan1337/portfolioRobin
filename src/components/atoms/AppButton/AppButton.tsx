import { Button, ButtonProps } from '@mui/material';
import React from 'react';

const AppButton = (props: ButtonProps) => {

	const buttonStyles = {
		padding: 8,
		width: 240,
		maxWidth: '100%',
		borderRadius: 4,
		height: 36,
		fontWeight: 700,
		letterSpacing: 1,
		fontSize: 16
	}

	return (
		<Button variant="contained" className="app-button" style={buttonStyles} {...props} />
	)
}

export default AppButton;