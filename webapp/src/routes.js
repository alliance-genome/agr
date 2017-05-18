import React from 'react';
import { IndexRoute, Route  } from 'react-router';

import Wordpress from './containers/wordpress';
import Layout from './containers/layout';
import Search from './containers/search';
import GenePage from './containers/genePage';

export default (
  <Route component={Layout} path='/'>
    <IndexRoute component={Wordpress} />
    <Route component={Wordpress} path='wordpress/' />
    <Route component={Wordpress} path='wordpress' />
    <Route component={Wordpress} path='wordpress/:pageId' />
    <Route component={Search} path='search' />
    <Route component={GenePage} path='gene/:geneId' />
  </Route>
);
