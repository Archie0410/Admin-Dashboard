import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'role', headerName: 'Role', width: 150 },
];

const rows = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'User' },
];

const DataTable = () => (
  <div style={{ height: 300, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      paginationModel={{ pageSize: 5, page: 0 }}
    />
  </div>
);

export default DataTable;