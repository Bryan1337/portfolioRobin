import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

export enum AppTextType {
	Primary,
	Secondary,
}

interface AppTextProps extends TypographyProps {
	type?: AppTextType;
}

const AppText = ({
	type = AppTextType.Primary,
	className,
	...props
}: AppTextProps) => {

	return <Typography
		className={`${className || ``} app-text${type === AppTextType.Secondary ? `-secondary` : ``}`}
		{...props}
	/>;
}

export default AppText;