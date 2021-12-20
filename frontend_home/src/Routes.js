/**
 * Caution: Consider this file when using react-scripts
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import homepage from 'views/homepage';
import WithLayout from 'WithLayout';
import { Main as MainLayout, Minimal as MinimalLayout, DocsLayout } from './layouts';

import {
  // PortfolioGrid as PortfolioGridView,
  BlogSearch as BlogSearchView,

} from './views';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={BlogSearchView}
            layout={MainLayout}
          />
        )}
      />

            <Route
        exact
        path="/"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={homepage}
            layout={MainLayout}
          />
        )}
      />

      {/* <Route
        exact
        path="/blog-search"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={BlogSearchView}
            layout={MainLayout}
          />
        )}
      /> */}

      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;
