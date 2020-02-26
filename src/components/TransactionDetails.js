import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransationDetails } from '../actions/';
import { Divider } from 'antd';
import styled from 'styled-components'



const TransactionDetails = ({ match, className }) => {
  const { iban } = match.params;
  const dispatch = useDispatch()
  const { details } = useSelector(state => state.transactions);
  const { account, accountName, amount, transactionType, currencyCode } = details

  useEffect(() => {
    dispatch(getTransationDetails(iban))
  }, [])

  return (
    <div className={className}>
      <h1>Transaction {account}</h1>
      <Divider orientation="center" />
      <div><strong>Account NO.:</strong>{account}</div>
      <div><strong>Account Name:</strong>{accountName}</div>
      <div><strong>Currency Code:</strong>{currencyCode}</div>
      <div><strong>Amount</strong>{amount}</div>
      <div><strong>Transaction Type:</strong>{transactionType}</div>

    </div>
  )
}
export default styled(TransactionDetails)`
padding: 20px;
`;