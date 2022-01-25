import React, { useState } from 'react';
import styles from './styles.module.css';
// import { DataGrid } from '@mui/x-data-grid';
// import { style } from '@mui/system';
// import { BasicTable } from '../Table/BasicTable';
// import { SortingTable } from '../Table/SortingTable';
import { FilteringTable } from '../Table/FiltertingTable';

const USERS = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const [users, setUsers] = useState(USERS);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];

  // const onSearch = (e) => {
  //   console.log(e.target.value);
  //   if (e.target.value) {
  //     const data = [...USERS];
  //     const searchedUsers = data.filter(
  //       (user) =>
  //         (user.firstName &&
  //           user.firstName
  //             .toLowerCase()
  //             .includes(e.target.value.toLowerCase())) ||
  //         (user.lastName &&
  //           user.lastName
  //             .toLowerCase()
  //             .includes(e.target.value.toLowerCase())) ||
  //         (user.age && user.age.toString().includes(e.target.value.toString()))
  //     );
  //     console.log(searchedUsers);
  //     setUsers(searchedUsers);
  //   } else {
  //     setUsers(USERS);
  //   }
  // };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Welcome User
          </a>
        </div>
        {/* <div className={styles.search}>
          <input
            type="search"
            onInput={onSearch}
            placeholder="Search Table iteam"
          />
        </div> */}
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      <FilteringTable />
      {/* <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div> */}
    </div>
  );
};

export default Main;
