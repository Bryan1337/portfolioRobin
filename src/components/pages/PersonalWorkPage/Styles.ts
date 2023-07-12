
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	pageContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100%',
		backgroundColor: theme.palette.primary.main,
	},
	textContainer: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		backgroundColor: theme.palette.secondary.main,
	},
	workContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		maxWidth: 900,
	},
	text: {
		fontSize: '15vmin',
		letterSpacing: '-1.5vmin',
	}
}));

export default useStyles;
