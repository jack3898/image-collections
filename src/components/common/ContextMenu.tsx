import { useEffect } from 'react';
import { useApp } from '../hooks/useApp.js';

export function ContextMenu(): JSX.Element {
	const store = useApp();

	useEffect(() => {
		chrome.contextMenus.create({
			id: 'add-to-collection',
			title: 'Add to image collection',
			contexts: ['image']
		});

		console.log('fires');

		chrome.contextMenus.onClicked.addListener(function (info) {
			if (info.menuItemId === 'add-to-collection') {
				console.log(info);
			}
		});
	}, []);
}
