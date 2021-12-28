import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppProvider } from './store';
import App from './app';
import './styles/index.css';

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
