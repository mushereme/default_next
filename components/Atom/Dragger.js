import React, { useState } from 'react';
// import { InboxOutlined } from '@ant-design/icons';


import { message, Upload } from 'antd';

const { Dragger } = Upload;

const AtomDragger = (props) => {

  const { normFileList, itemName } = props;

  const [fileList, setFileList ] = useState([])
  
  const uploader = (info) => {    
    if (info.file.status !== 'uploading') {
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      setFileList(info?.fileList)
      normFileList({
        item: itemName,
        file: info?.file,
        fileList: info?.fileList
      });
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
  
  const draggerProps = { 
    name: 'file',
    listType: "picture",
    listList: fileList,
    action: "https://api.cloudinary.com/v1_1/daliec2ib/image/upload?upload_preset=bkoupload",
    onChange: uploader,
  }

  return (
    <Upload {...draggerProps}>
      <p className="ant-upload-drag-icon">
        {/* <InboxOutlined /> */}
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
        band files
      </p>
    </Upload>
  )
  

}

export default AtomDragger;