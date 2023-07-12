import React from 'react';

interface AppIframeProps {
	url: string
}

const AppIframe = ({
	url
}: AppIframeProps) => {

	const iframeRef = React.useRef<HTMLIFrameElement>(null);

	const onScroll = () => {

		if (Boolean(iframeRef.current)) {
			/** Parralax effect */
			(iframeRef.current as HTMLIFrameElement).style.transform = `translateY(-${window.scrollY / 2}px)`;
		}
	}

	React.useEffect(() => {


		if(Boolean(iframeRef.current)) {

			window.addEventListener('scroll', onScroll, false);

			return () => {

				window.removeEventListener('scroll', onScroll, false);
			}
		}

	}, [iframeRef.current]);

	return (
		<div className="iframe-bgr">
			<div className="iframe-fg">
				<iframe
					ref={iframeRef}
					allow="autoplay; encrypted-media"
					src={url}
					width="100%"
					height="100%"
				/>
			</div>
		</div>
	);
}


export default AppIframe;