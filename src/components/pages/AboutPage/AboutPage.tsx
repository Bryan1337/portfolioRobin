import { Box } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import AppText, { AppTextType } from 'Components/atoms/AppText/AppText';
import ColorWrapper from 'Components/atoms/ColorWrapper/ColorWrapper';
import AppEdgeSvg from 'Components/atoms/AppEdgeSvg/AppEdgeSvg';
import useStyles from './Styles';


const AboutPage = () => {

	const textStyles = {
		fontSize: '15vmin',
		letterSpacing: '-1.5vmin',
		lineHeight: .8,
	}

	const theme = useTheme();

	const classes = useStyles();

	return (
		<Box
			id="about"
			className={classes.pageContainer} >
			<Box
				width="100%"
				display="flex"
				alignItems="center"
				justifyContent="center"
				mt={-6} mb={4}>
				<AppEdgeSvg />
			</Box>

			<Box
				mt={-6}
				pt={3}
				style={{
					backgroundColor: theme.palette.primary.main
				}}
				width="100%"
			>
				<Box className={classes.shapeContainer} >
					<Box display="flex" alignItems="center" maxWidth={900} width="100%" margin="0 auto" >
						<Box display="flex" alignItems="center" pr={2} >
							<AppText color="primary" {...textStyles} fontSize="15vmin">
								&
							</AppText>
						</Box>
						<Box display="flex" flexDirection="column">
							<AppText color="white" {...textStyles}>
								Videographer
							</AppText>
							<AppText color="white" {...textStyles}>
								Editor
							</AppText>
						</Box>
					</Box>
					<Box display="flex" alignItems="center" justifyContent="center" pt={4} >
						<AppText fontSize="2vmin" color="white">
							LOCATED IN LEIDEN
						</AppText>
					</Box>
				</Box>
			</Box>
			<StatsPage />
		</Box>
	)
}



const StatsPage = () => {

	const textStyles = {
		fontSize: "4vmin",
		letterSpacing: "-.4vmin",
	}

	const theme = useTheme();

	return (
		<Box width="100%" maxWidth={900} display="flex" justifyContent="center" flexDirection="column" flexGrow={1}>
			<Box display="flex" alignItems="center" justifyContent="center">
				<AppText type={AppTextType.Secondary} color="secondary"   {...textStyles}>
					videographer & editor
				</AppText>
				<Box pl={1} />
				<AppText type={AppTextType.Secondary} color="white" {...textStyles}>
					fascinated to tell stories
				</AppText>
			</Box>
			<Box display="flex" alignItems="center" justifyContent="center">
				<AppText type={AppTextType.Secondary} color="secondary"   {...textStyles}>
					creative problem solving
				</AppText>
				<Box pl={1} />
				<AppText type={AppTextType.Secondary} color="white" {...textStyles}>
					and attention to detail
				</AppText>
			</Box>
			<Box display="flex" alignItems="center" justifyContent="center">
				<AppText type={AppTextType.Secondary} color="white"  {...textStyles}>
					intrigued by the latest
				</AppText>
				<Box pl={1} />
				<AppText type={AppTextType.Secondary} color="secondary"  {...textStyles}>
					film technology & trends
				</AppText>
			</Box>
			<Box display="flex" alignItems="center" justifyContent="center">
				<AppText type={AppTextType.Secondary} color="white"  {...textStyles}>
					strong communication
				</AppText>
				<Box pl={1} />
				<AppText type={AppTextType.Secondary} color="secondary"  {...textStyles}>
					by video
				</AppText>
			</Box>
			<Box display="flex" alignItems="center" justifyContent="center">
				<AppText type={AppTextType.Secondary} color="white"  {...textStyles}>
					running on professional
				</AppText>
				<Box pl={1} />
				<AppText type={AppTextType.Secondary} color="secondary"  {...textStyles}>
					cinema cameras
				</AppText>
				<Box pl={1} />
				<AppText type={AppTextType.Secondary} color="white"  {...textStyles}>
					<ColorWrapper color={theme.palette.secondary.main}>
						{"("}
					</ColorWrapper>
					sony fx3 cinema line
					<ColorWrapper color={theme.palette.secondary.main}>
						{")"}
					</ColorWrapper>
				</AppText>
			</Box>
			<Box display="flex" alignItems="center" justifyContent="center">
				<AppText type={AppTextType.Secondary} color="white"  {...textStyles}>
					excellent shoots
				</AppText>
				<Box pl={1} />
				<AppText type={AppTextType.Secondary} color="secondary" {...textStyles} >
					and creative edits
				</AppText>
				<Box pl={1} />
				<AppText type={AppTextType.Secondary} color="white"  {...textStyles}>
					<ColorWrapper color={theme.palette.secondary.main}>
						{"("}
					</ColorWrapper>
					4k 10 bit 4.2.2
					<ColorWrapper color={theme.palette.secondary.main}>
						{")"}
					</ColorWrapper>
				</AppText>
			</Box>
		</Box>
	)
}


export default AboutPage;