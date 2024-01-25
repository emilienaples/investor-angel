// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import React from 'react';
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  Upload,
  Modal
} from 'antd';

const { Option } = Select;
import axios from "axios"
import { baseUrl } from 'src/config/contants'

const normFile = (e) => {
  multiple: false,
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  
  return e?.fileList;
};



const UploadLogos = () => {

  const [data, setData] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);


  const onFinish = (values) => {
    setData(values)
    setTimeout(()=>{
      create_stock();
    },100)
  };

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const [image,setImage] = useState("");

  const create_stock = () =>{
    // return;
      // imageId: data?.upload?.[0]?.originFileObj?.uid,

    let body = {
      name: data.name,
      imageId:image,
      category: data.select
    };
    console.log("data",body);

    axios.post(`${baseUrl}/stocks/create/`,body, {
      headers: {
          'Accept':'application/json',
          'Content-Type':'multipart/form-data',
      },
  
      })
      .then(function (response) {
          return response.json();
      })
      .then((data)=>{
        console.log("data",data)
      })
      .catch(error=>{
         console.log("error",error)
      })
 
  }

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
    console.log("fileList",newFileList);
    let body = new FormData();
    body.append("file",newFileList?.[0]?.originFileObj)
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

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );


  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='#' target='_blank'>
          Circle of Competence
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
        <div className='stocksLogos'>
        <Form
          name="validate_other"
          onFinish={onFinish}
        >

          <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please enter your name',
            },
          ]}>
          <Input />
        </Form.Item>

          <Form.Item
            name="select"
            label="Select Category"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please select category',
              },
            ]}
          >
            <Select placeholder="Please select a country">
              <Option value="Things We Wear">Things We Wear</Option>
              <Option value="Things We Eat">Things We Eat</Option>
              <Option value="Popoular Tech Stocks">Popoular Tech Stocks</Option>
              <Option value="World Leaders">World Leaders</Option>
              <Option value="Popular Retail">Popular Retail</Option>
              <Option value="Riskier Investments">Riskier Investments</Option>
              <Option value="Things We Use">Things We Use</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Upload Image">
            <Form.Item name="upload" multiple="false" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
            <Upload
                
              // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture-circle"
                fileList={fileList}
                onPreview={handlePreview}

                onChange={handleChange}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
            </Form.Item>
          </Form.Item>


          
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
              <img
                alt="example"
                style={{
                  width: '100%',
                }}
                src={previewImage}
              />
            </Modal>
        
          <Button type="primary" htmlType="submit" onClick={()=>{create_stock()}}>
            Submit
          </Button>
            
        </Form>
        </div>
        </Card>
      </Grid>
    </Grid>
  )
}

export default UploadLogos
