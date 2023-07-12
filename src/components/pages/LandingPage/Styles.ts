
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	pageContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		position: 'relative',
		overflow: 'hidden',
		height: '100%',
		paddingRight: theme.spacing(2),
		paddingLeft: theme.spacing(2),
	},
	textContainer: {
		maxWidth: 900,
		width: '100%',
		padding: theme.spacing(4),
		marginBottom: -theme.spacing(4),
		paddingBottom: theme.spacing(1),
	},
	buttonContainer: {
		maxWidth: 900,
		width: '100%',
		padding: theme.spacing(4),
		marginBottom: -theme.spacing(4),
		paddingBottom: theme.spacing(1),
		display: "flex",
		alignItems: "flex-end",
		flexDirection: "column",
	},
	text: {
		fontSize: '20vmin',
		letterSpacing: '-2vmin',
		lineHeight: .8,
		color: 'white',
	}
}));

export default useStyles;
