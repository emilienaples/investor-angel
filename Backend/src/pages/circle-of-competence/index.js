import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography, Box } from '@mui/material';
import axios from "axios"
import { baseUrl } from 'src/config/contants'

const UploadLogos = () => {
  const [name, setName] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [file, setFile] = useState(null);
  const [image,setImage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleFileChange = (event) => {
    // Assuming a single file upload, hence using event.target.files[0]
    setFile(event.target.files[0]);
    let body = new FormData();
    body.append("file",event.target.files[0])
    axios.post(`${baseUrl}/stocks/upload_files/`,body, {
      headers: {
          'Accept':'application/json',
          'Content-Type':'multipart/form-data',
      },
  
      })
      .then(function (response) {
        console.log("data---------------->",response)
        setImage(response?.data?.[0]?.path);
      })
     
      .catch(error=>{
         console.log("error",error)
      })
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Name:', name);
    console.log('Selected Value:', selectedValue);
    console.log('image:', image);

    let body = JSON.stringify({
        name:name,
        category:selectedValue,
        imageId:image
    })
    axios.post(`${baseUrl}/stocks/create/`,body, {
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
    
        })
        .then(function (response) {
          console.log("data---------------->",response)
          alert("done");

        //   setImage(response?.data?.[0]?.path);
        })
       
        .catch(error=>{
           console.log("error",error)
    })
    
    // You can perform further actions like API calls or other processing here
  };

  return (
    <form>
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: 'auto' }}>
        <TextField
          label="Name"
          value={name}
          onChange={handleNameChange}
          margin="normal"
        />

        <FormControl margin="normal">
          <InputLabel id="select-label">Category
          </InputLabel>
          <Select
            labelId="select-label"
            value={selectedValue}
            onChange={handleSelectChange}
          >
              <MenuItem value="Household Names">Household Names</MenuItem>
              <MenuItem value="Things We Wear">Things We Wear</MenuItem>
              <MenuItem value="Things We Eat">Things We Eat</MenuItem>
              <MenuItem value="Popoular Tech Stocks">Popoular Tech Stocks</MenuItem>
              <MenuItem value="World Leaders">World Leaders</MenuItem>
              <MenuItem value="Popular Retail">Popular Retail</MenuItem>
              <MenuItem value="Riskier Investments">Riskier Investments</MenuItem>
              <MenuItem value="Things We Use">Things We Use</MenuItem>
          </Select>
        </FormControl>

        <input
          type="file"
          onChange={handleFileChange}
          style={{ margin: '20px 0' }}
        />

        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Box>
    </form>
  );
};

export default UploadLogos;
