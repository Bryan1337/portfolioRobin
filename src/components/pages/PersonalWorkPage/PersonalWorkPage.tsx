import { Box, Grid, CircularProgress } from '@mui/material';
import React from 'react';
import AppText from 'Components/atoms/AppText/AppText';
import useStyles from './Styles';
import AppIframeBox from 'Components/atoms/AppIframeBox/AppIframeBox';

const PersonalWorkPage = () => {

	const classes = useStyles();

	const workMap = [
		{
			title: 'Reel eigen werk 2022-2023',
			link: `https://www.youtube-nocookie.com/embed/WzyIzrNc3SE`,
		},
		{
			title: 'Reel werkzaamheden Eddie',
			link: `https://www.youtube-nocookie.com/embed/1cjnK8h9xGw`,
		}
	]

	return (
		<Box id="work" className={classes.pageContainer} >
			<Box className={classes.textContainer} >
				<AppText color="white" className={classes.text} >
					Personal work
				</AppText>
			</Box>
			<Box
				mt={-1}
				flexGrow={1}
				className={classes.textContainer}
				style={{
					background: `linear-gradient(180deg, rgba(23,33,58,1) 0%, rgba(18,33,52,1) 33%, rgba(16,26,46,1) 66%, rgba(26,26,52,1) 100%)`
				}}>
				<Grid container className={classes.workContainer} px={4}>
					{workMap.map((work, index) => (
						<Box py={2} width="100%" key={index}>
							<AppText color="white" fontSize="5vmin" textAlign="center" letterSpacing="-.5vmin">
								{work.title}
							</AppText>
							<Box pb={6} />
							<AppIframeBox src={work.link} height="100%" width="100%" />
						</Box>
					))}
				</Grid>
			</Box>
		</Box>
	)
}


export default PersonalWorkPage;