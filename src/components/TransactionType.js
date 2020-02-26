import React from 'react';
import { Checkbox } from 'antd';
import { transactionsType } from '../../data/constants'
import styled from 'styled-components'



const TransactionType = ({ className, filters, onChange }) => {
  return (
    <div className={className}>
      <div>
        <h3>Transaction Type</h3>
        {filters.map(filter =>
          <Checkbox
            key={filter.value}
            checked={filter.active}
            onChange={(e) => onChange({ ...filter, active: !filter.active })}
            className="capitalize"
          >
            {filter.value}
          </Checkbox>
        )}
      </div>
    </div>
  )
}

export default styled(TransactionType)`
    background-color: #e8e8e8;
    padding: 10px;
    margin: 10px;
    .capitalize {
        text-transform: capitalize;
    }
`;