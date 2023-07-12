
import { makeStyles } from '@mui/styles';

interface CssProps {
	isLoaded: boolean;
}

const useStyles = makeStyles((theme) => ({
	frameContainer: {
		aspectRatio: '16 / 9',
		backgroundColor: '#202124',
		transition: 'opacity .5s ease-in-out',
		position: 'relative',
	},
	loadContainer: {
		height: '100%',
		width: '100%',
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	iframeBox: ({ isLoaded }: CssProps) => ({
		opacity: isLoaded ? 1 : 0,
		transition: 'opacity .5s ease-in-out'
	})
}));

export default useStyles;