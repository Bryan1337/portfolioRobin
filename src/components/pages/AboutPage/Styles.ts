
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	pageContainer: {
		height: '100%',
		width: '100%',
		backgroundColor: theme.palette.primary.main,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		position: 'relative',
	},
	shapeContainer: {
		display: 'flex',
		maxWidth: 1200,
		width: '100%',
		flexDirection: 'column',
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		background: `linear-gradient(130deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.main} 80%, transparent 80%, transparent 100%)`,
	},
	text: {
		fontSize: '15vmin',
		letterSpacing: '-1.5vmin',
		lineHeight: .8,
	}
}));

export default useStyles;
