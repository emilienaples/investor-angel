
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { baseUrl ,assetUrl} from 'src/config/contants'



const MaterialTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get(`${baseUrl}/stocks`) // Replace with your API endpoint
        .then(response => {
          console.log("response",response.data);
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }, []);
  
    const edit_code = (evt,id) =>{
      let value = evt.target.value;
      if(value != ""){
        axios.post(`${baseUrl}/stocks/update_code`,{id,code:value}) // Replace with your API endpoint
        .then(response => {
          console.log("response",response.data);
          
          return;

          // setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
      }
    }

    const delete_icon = (id) =>{
      if(confirm("Do you want to delete?")){
      axios.post(`${baseUrl}/stocks/delete`,{id}) // Replace with your API endpoint
        .then(response => {
          console.log("response",response.data);
          const existing_stocks = data;
          const new_data = existing_stocks.filter((s)=>{return s.id != id});
          console.log("existing",existing_stocks,new_data)
          setData(new_data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
      } 
    }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>
                <img src={assetUrl+row.imageId} alt={row.name} style={{ width: '50px', height: '50px' }} />
              </TableCell>
              <TableCell><input value={row.code}
                        onDoubleClick={(e) => { e.target.readOnly = false; }} // Allow editing on double click
                        onBlur={(evt)=>{edit_code(evt,row.id)}}/></TableCell>
              <TableCell>
                <button onClick={()=>delete_icon(row.id)}>Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MaterialTable;
