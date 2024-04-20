import { StrictMode } from 'react';
import { ContextMenu } from './components/common/ContextMenu.js';

export function App(): JSX.Element {
	return (
		<StrictMode>
			<ContextMenu />
			<div className="p-4 min-w-96">
				<p>Hi</p>
			</div>
		</StrictMode>
	);
}
