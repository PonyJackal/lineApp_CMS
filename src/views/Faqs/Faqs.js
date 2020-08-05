import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { FaqsToolbar, FaqsTable } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  }
}));

const Faqs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <FaqsTable title="Faqs" />
      </div>
    </div>
  );
};

export default Faqs;
