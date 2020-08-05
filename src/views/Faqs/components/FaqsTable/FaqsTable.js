import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  CircularProgress,
  Typography
} from '@material-ui/core';

import MUIDataTable from "mui-datatables";
import MaterialTable from 'material-table';
import DataTable from '../../../../components/DataTable';
import useActions from '../../../../lib/useActions';
import { getRequest, createRequest, updateRequest, removeRequest } from '../../../../redux/faq/actions';

const useStyles = makeStyles(theme => ({
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  loading: {
    display: 'inline-block',
    marginTop: 100,
    marginBottom: 100,
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    height: 400,
  },
  loadingError: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
}));

// const columns = [
//   {
//     name: "question",
//     label: "Question",
//     options: {
//       filter: true,
//       sort: true,
//     }
//   },
//   {
//     name: "answer",
//     label: "Answer",
//     options: {
//       filter: true,
//       sort: false,
//     }
//   },
//   {
//     name: "created_at",
//     label: "Created_at",
//     options: {
//       filter: true,
//       sort: false,
//     }
//   },
// ];

const columns = [
  {
    title: "Question",
    field: "question",
  },
  {
    title: "Answer",
    field: "answer",
  },
  {
    title: "Created_at",
    field: "created_at",
  },
];

const options = {
  filterType: 'checkbox',
};

const FaqsTable = props => {
  // const { className, title } = props;
  const classes = useStyles();

  const faqs = useSelector(({ faq }) => faq.faqs);
  const isLoading = useSelector(({ loading }) => loading.FAQ_GET);
  const isGet = useSelector(({ faq }) => faq.isGet);
  const isUpdate = useSelector(({ faq }) => faq.isUpdate);

  const [selectedFaqs, setSelectedFaqs] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const rowsPerPageOptions = [10, 50, 100];

  const [onGet] = useActions(
    [getRequest],
    []
  );

  const [onCreate] = useActions(
    [createRequest],
    []
  );

  const [onUpdate] = useActions(
    [updateRequest],
    []
  );

  const [onRemove] = useActions(
    [removeRequest],
    []
  );

  useEffect(() => {
    onGet();
  }, []);

  if (isGet)
    return (
      // <MUIDataTable
      //   title={"Employee List"}
      //   data={faqs}
      //   columns={columns}
      //   options={options}
      // />
      <MaterialTable
        title="FAQs"
        columns={columns}
        data={faqs}
        editable={{
          onRowAdd: (newData) => new Promise((resolve) => {
            onCreate(newData);
            resolve();
          }),
          onRowUpdate: (newData, oldData) => new Promise((resolve) => {
            resolve();
            onUpdate({
              id: oldData.id,
              faq: newData
            });
          }),
          onRowDelete: (oldData) => new Promise((resolve) => {
            resolve();
            onRemove(oldData.id);
          }),
        }}
      />
    )
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

FaqsTable.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default FaqsTable;
