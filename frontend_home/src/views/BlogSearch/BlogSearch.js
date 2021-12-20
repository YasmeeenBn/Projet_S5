import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Breadcrumb, Newsletter, Result } from './components';

import { breadcrumb, result } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionBreadcrumb: {
    '& .section-alternate__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
}));

const BlogSearch = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Result data={result} />
    </div>
  );
};

export default BlogSearch;
