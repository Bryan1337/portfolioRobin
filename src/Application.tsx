import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AboutPage from 'Components/pages/AboutPage/AboutPage';
import LandingPage from 'Components/pages/LandingPage/LandingPage';
import PersonalWorkPage from 'Components/pages/PersonalWorkPage/PersonalWorkPage';


const Application = () => {

	const aboutPageRef = React.useRef<HTMLElement>(null);

	const theme = createTheme({
		palette: {
			primary: {
				main: '#FECD2C'
			},
			secondary: {
				main: '#212121'
			}
		},
	})

	const onPageScroll = () => {

		const aboutPageBounds = aboutPageRef.current?.getBoundingClientRect()

		const themeMetaTag = document.querySelector('[name="theme-color"]');

		if (themeMetaTag) {

			if (aboutPageBounds.top < 0 && aboutPageBounds.bottom > 0) {

				themeMetaTag.setAttribute('content', theme.palette.primary.main);

			} else {

				themeMetaTag.setAttribute('content', theme.palette.secondary.main);

			}
		}
	}

	useEffect(() => {

		if(Boolean(aboutPageRef.current)) {

			document.addEventListener('scroll', onPageScroll);

			return () => {

				document.removeEventListener('scroll', onPageScroll);
			}
		}

	}, [aboutPageRef.current])

	return (
		<ThemeProvider theme={theme}>
			<Box height="100%">
				<LandingPage />
			</Box>
			<Box height="100%" ref={aboutPageRef}>
				<AboutPage />
			</Box>
			<Box height="100%">
				<PersonalWorkPage />
			</Box>
		</ThemeProvider>
	);
};

export default Application;