import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography, TextField, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ViewPayment() {
  const [open, setOpen] = useState(false); 
  
  const columns = [
    { field: "id", headerName: "SL.NO", width: 200 },
    { field: "firstName", headerName: "Item", width: 200 },
    { field: "firstName", headerName: "Quantity", width: 200 },
    { field: "firstName", headerName: "Price", width: 200 },
    { field: "firstName", headerName: "Total", width: 200 },
  ];

  const rows = [
    { id: 1, firstName: "John" },
    { id: 2, firstName: "Jane" },
    { id: 3, firstName: "Jane" },
    { id: 4, firstName: "Jane" },
    { id: 5, firstName: "Jane" },
  ];

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/ViewOrders");
  }

  return (
    <>
      <Box sx={{ marginTop: '20px', position: 'relative', left: '160px' }}>
        <Grid container spacing={1} sx={{ marginTop: '10px', left: "10px" }}>
          <Grid item xs={6}>
            <Typography variant="h4" sx={{ position: 'absolute', top: '10px', left: '10px' }}>
              Manage Payment
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <TextField id="outlined-basic" label="Token Number" variant="outlined" />
          </Grid>

          <Grid item xs={2}>
            <Button size="small" variant="contained" onClick={() => setOpen(true)}>
              Search
            </Button>
          </Grid>
        </Grid>

        {open && ( // Render the following elements only when 'open' is true
          <>
            <Typography variant="body1" sx={{ position: 'absolute', top: '130px', left: '10px' }}>
              Grand Total: Rs. 65.00
            </Typography>
            <Typography variant="body1" sx={{ position: 'absolute', top: '130px', right: '320px' }}>
              Payment Status: PAID
            </Typography>
            <Box sx={{ flexGrow: 1, height: 400, width: '80%', position: 'absolute', top: '170px', left: '0' }}>
              <DataGrid
                rows={rows}
                columns={columns}
              />
            </Box>
          </>
        )}
      </Box>
    </>
  );
}

export default ViewPayment;
