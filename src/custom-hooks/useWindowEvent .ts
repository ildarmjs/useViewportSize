import { useEffect } from 'react';

type WindowEventOptions = boolean | AddEventListenerOptions;

export function useWindowEvent(
	type: string,
	listener: (event: Event) => void,
	options?: WindowEventOptions
): void {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener(type, listener, options);
			return () => window.removeEventListener(type, listener, options);
		}
	}, [type, listener, options]);
}