import React from 'react';

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  // const count = preGlobalFilteredRows.length;
  return (
    <span>
      Search:{' '}
      <input
        value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value)}
        placeholder={'Find Records'}
      />
    </span>
  );
};
