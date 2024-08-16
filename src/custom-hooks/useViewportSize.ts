
import React from 'react';
import { useWindowEvent } from './useWindowEvent ';

type ViewportSize = {
	width: number;
	height: number;
};

const useViewportSize = (): ViewportSize => {
	const [size, setSize] = React.useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const handleResize = () => {
		setSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useWindowEvent('resize', handleResize);

	return size;
};

export default useViewportSize;