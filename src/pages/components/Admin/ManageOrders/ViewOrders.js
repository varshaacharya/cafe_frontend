
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button,  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from '../../../../api/axios';
import ViewDetailOrder from './ViewDetailOrder';
const URL="./order";

function ViewOrders ()  {    
    const columns = [
        { field: "id", headerName: "SL.NO", width: 190 },
        { field: "barcode_number", headerName: "Token Number", width: 190 },
        { field: "serving_time", headerName: "Serving Time", width: 190 },
        { field: "student_email", headerName: "Student Email", width: 190 },
        { field: "booking_date", headerName: "Ordered On", width: 190 },
        { field: "booking_status", headerName: "status", width: 190 },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width:150,
            cellClassName:'actions',
            getActions : (params) => {
                return [
                        <EditData selectedRow={params.row}/>,
                       
                ];            
            }            
        },
      ];
      const [dataList, setDataList] = useState([]); 
      const [id,setId]=useState('');
      const [barcode_number,setBarcode_number]=useState('');
      const [open,setOpen]=useState(false);

      useEffect(() => {
        loadData();        
    },[]);

    const loadData = async () => {
       
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
    
      

      const navigate=useNavigate();
    
      const EditData = (props) => {
        return (
            <Button 
                size="small" 
                variant="contained"
                style={{ cursor: "pointer" }} onClick={(e) => {
                e.stopPropagation();
                console.log(props.selectedRow.id);
                console.log(props.selectedRow.barcode_number);
                setId(props.selectedRow.id);
                setBarcode_number(props.selectedRow.barcode_number);
                setOpen(true);
                // navigate("/ViewDetailOrder");                
            }}>View</Button>
        );
    }
    
    return (
        <>
       
        <div className="GridContent">
            <Box sx={{ position: 'relative', top: '10px', left: '180px', height: 400, width: '85%' }}>
                <DataGrid
                rows={dataList}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                /> 
                <ViewDetailOrder
                rowData={barcode_number} 
                setOpen ={setOpen} 
                />   
            </Box>
        </div>


        </>
      );
};
export default ViewOrders;
      