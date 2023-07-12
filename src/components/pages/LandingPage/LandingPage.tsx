import { Box } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import AppText from 'Components/atoms/AppText/AppText';
import AppButton from 'Components/atoms/AppButton/AppButton';
import AppIframe from 'Components/atoms/AppIframe/AppIframe';
import { scrollElementIntoView } from 'Scripts/scrollHelper';
import useStyles from './Styles';
import ColorWrapper from 'Components/atoms/ColorWrapper/ColorWrapper';

const LandingPage = () => {

	const videoID = "WzyIzrNc3SE";

	const videoUrlParams = new URLSearchParams({
		controls: "0",
		autoplay: "1",
		mute: "1",
		loop: "1",
		modestbranding: "1",
		autohide: "1",
		showinfo: "0",
		vq: "hd1080",
		playlist: videoID,
	});

	const videoUrl = (
		`https://www.youtube-nocookie.com/embed/${videoID}?${videoUrlParams}`
	);

	const classes = useStyles();

	const theme = useTheme();

	return (
		<Box className={classes.pageContainer}>
			<AppIframe url={videoUrl} />
			<Box className={classes.textContainer} >
				<AppText className={classes.text}>
					ROBIN
				</AppText>
				<AppText className={classes.text}>
					VAN
				</AppText>
				<AppText className={classes.text}>
					DUIN
					<ColorWrapper color={theme.palette.primary.main}>
						.
					</ColorWrapper>
				</AppText>
			</Box>
			<Box className={classes.buttonContainer}>
				<AppButton onClick={() => scrollElementIntoView("about")}>
					ABOUT ME
				</AppButton>
				<Box pt={.5} />
				<AppButton onClick={() => scrollElementIntoView("work")}>
					WORK
				</AppButton>
			</Box>
		</Box>
	)
}


export default LandingPage;