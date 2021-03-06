import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import IndexPage from './components/home/IndexPage'; 

export default (
	<Route path="/" component={App}>
		<IndexRoute component={IndexPage} /> 
	</Route>
);
