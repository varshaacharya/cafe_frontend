import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from '../../../../api/axios';
import { useState,useEffect } from 'react';
const URL="./order";

function ViewDetailOrder({rowData,open,setOpen}) {
  const columns = [
    { field: "id", headerName: "SL.NO", width: 200 },
    { field: "item_name", headerName: "Item", width: 200 },
    { field: "quantity", headerName: "Quantity", width: 200 },
    // { field: "firstName", headerName: "Price", width: 200 },
    // { field: "firstName", headerName: "Total", width: 200 },
  ];
  const [dataList, setDataList] = useState([]); 
  const [id,setId]=useState('');
  const [barcode_number,setBarcode_number]=useState('');

      useEffect(() => {
        loadData();        
    },[rowData]);

    const loadData = async () => {
      setId(rowData.id );
        setBarcode_number(rowData.barcode_number );
      try {
        
          const response = await axios.get(URL);
  
          if (response.data.status === 401) {
              setDataList([]);
          } else {
              setDataList(response.data.data);
          }
      } catch (err) {
          if (!err?.response) {
              console.log("No server response");
          } else {
              console.log(err?.response.data);
          }
      }
  };

  

  


  const handleBack = () => {
    setOpen(false);
  }

  return (
    <>
    {open && (
      <Box sx={{ marginTop: '20px', padding: '20px', position: 'relative', left: '160px' }}>
        <Typography variant="h4" sx={{ position: 'absolute', top: 0, left: 0 }}>
          Manage Order
        </Typography>
        <Box sx={{ position: 'absolute', top: '60px', left: 0 }}>
          <Typography variant="body1">Invoice</Typography>
          <Typography variant="body1">Shreya</Typography>
          <Typography variant="body1">7745671727</Typography>
          <Typography variant="body1">surathkall</Typography>
        </Box>
        <Box sx={{ flexGrow: 1, height: 400, width: '80%', position: 'absolute', top: '170px', left: '0' }}>
          <DataGrid
            rows={dataList}
            columns={columns}
          />
        </Box>
        <Button size="small" variant="contained" sx={{ position: 'absolute', top: 0, right: '310px' }} onClick={handleBack}>
          Back
        </Button>
        <Typography variant="body1" sx={{ position: 'absolute', top: '130px', right: '310px' }}>
          Grand Total: Rs. 65.00
        </Typography>
      </Box>
       )}
    </>
  );
}

export default ViewDetailOrder;
