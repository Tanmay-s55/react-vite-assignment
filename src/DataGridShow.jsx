import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'Body',
    width: 160,
    editable: true,
  },
];

let rows;

export default function DataGridShow({data}) {
  const [display,setDisplay] = useState(false);
  useEffect(() => {
    rows = data;
    setDisplay(true);
  },[]);

  return (
    <div>
    {display && 
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>}
    </div>
  );
}