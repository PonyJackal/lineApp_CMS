import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  CircularProgress,
  Typography
} from '@material-ui/core';

import { getInitials } from 'helpers';
import MUIDataTable from "mui-datatables";
import useActions from '../../../../lib/useActions';
import { getRequest } from '../../../../redux/user/actions';

const columns = [
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "email",
    label: "Email",
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: "created_at",
    label: "Created_at",
    options: {
      filter: true,
      sort: true,
    }
  },
];

const options = {
  filterType: 'checkbox',
};

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const UsersTable = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const users = useSelector(({ user }) => user.users);
  const isGet = useSelector(({ user }) => user.isGet);
  const isLoading = useSelector(({ loading }) => loading.USER_GET);

  const [onGet] = useActions(
    [getRequest],
    []
  );

  useEffect(() => {
    onGet();
  }, []);

  if (isGet) {
    return (
      <MUIDataTable
        title={"User List"}
        data={users}
        columns={columns}
        options={options}
      />
    );
  }
  else {
    if (isLoading)
      return (
        <CircularProgress color="primary" size={100} className={classes.loading} />
      );
    else {
      return (
        <div className={classes.loadingError}>
          <Typography variant="h1">Connection Error</Typography>
          <img
            alt="Under development"
            className={classes.image}
            src="/images/undraw_page_not_found_su7k.svg"
          />
        </div>
      );
    }
  }

};

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default UsersTable;
