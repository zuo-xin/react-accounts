import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Records from './components/Records';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Records />, 
	document.getElementById('root')
);
serviceWorker.unregister();
