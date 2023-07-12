import { Box, Grid, CircularProgress } from '@mui/material';
import React from 'react';
import useStyles from './Styles';


const AppIframeBox = (props: any) => {

	const [isLoaded, setIsLoaded] = React.useState(false);

	const handleOnLoad = () => {

		setIsLoaded(true);
	}

	const classes = useStyles({ isLoaded });

	return (
		<Box
			className={classes.frameContainer}
			{...props}
		>
			{!isLoaded && (
				<Box className={classes.loadContainer}>
					<CircularProgress thickness={6} />
				</Box>
			)}
			<iframe
				{...props}
				onLoad={handleOnLoad}
				className={classes.iframeBox}
			/>
		</Box>
	);
}



export default AppIframeBox;