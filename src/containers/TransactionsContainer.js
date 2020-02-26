
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import axios from 'axios';
import styled from 'styled-components'
import AllTransactions from '../components/AllTransactions.js';
import AccountName from '../components/AccountName';
import TransactionType from '../components/TransactionType';
import { getTransations, toggleFilter, sortAndPaginate } from '../actions';


const TransactionsContainer = ({ className }) => {

  const dispatch = useDispatch();
  const { list, loading, filters, sortOrder, sortBy, skip, limit, total } = useSelector(state => state.transactions);

  useEffect(() => {
    const params = {
      filters: filters.filter(filter => filter.active),
      sortOrder,
      sortBy,
      skip,
      limit
    }
    dispatch(getTransations(params));
  }, [filters, sortOrder, sortBy, skip, limit])

  const accountNameFilters = filters.filter(filter => filter.name === 'accountName');
  const transactionTypeFilters = filters.filter(filter => filter.name === 'transactionType');
  return (
    <div className={className}>
      <div className="checkbox-container">
        <h2>Filters</h2>
        <AccountName filters={accountNameFilters} onChange={(filter) => dispatch(toggleFilter(filter))} />
        <TransactionType filters={transactionTypeFilters} onChange={(filter) => dispatch(toggleFilter(filter))} />
      </div>
      <div className="transactions-table-container">
        <AllTransactions
          data={list}
          loading={loading}
          pageSize={limit}
          total={total}
          onChange={(pagination, filters, sorter) => {
            const mappedOrder = {
              'ascend': 'asc',
              'descend': 'desc'
            }

            const sortBy = sorter.columnKey;
            const sortOrder = sorter.order ? mappedOrder[sorter.order] : 'desc';
            const skip = (pagination.current * limit) - limit;
            dispatch(sortAndPaginate({
              sortBy,
              sortOrder,
              skip,
            }))
          }}
        />
      </div>
    </div>
  );
}

export default styled(TransactionsContainer)`
    display: flex;

    .checkbox-container {
        width: 250px;
        margin: 10px 20px;
    }

    .transactions-table-container {
        flex: 1;
    }

`;