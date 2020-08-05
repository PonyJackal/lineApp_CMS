import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  CircularProgress
} from '@material-ui/core';
import ReactFileReader from 'react-file-reader';

import useActions from '../../../../lib/useActions';
import { getRequest } from '../../../../redux/faq/actions';


const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    width: 100
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


const FaqsToolbar = props => {
  const classes = useStyles();
  const { className, ...rest } = props;

  const isLoading = useSelector(({ loading }) => loading.CUSTOMER_IMPORT);
  const [onImport] = useActions(
    [getRequest],
    []
  );

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button >Add Customer</Button>
      </div>
    </div>
  );
};

FaqsToolbar.propTypes = {
  className: PropTypes.string
};

export default FaqsToolbar;
