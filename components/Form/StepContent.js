import {
  Button,
  Form,
  Space,
  Input,
  Upload,
  message,
  InputNumber
} from "antd";

import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
 
//   #####  #     #  #####  ####### ####### #     # ####### ######  
//  #     # #     # #     #    #    #     # ##   ## #       #     # 
//  #       #     # #          #    #     # # # # # #       #     # 
//  #       #     #  #####     #    #     # #  #  # #####   ######  
//  #       #     #       #    #    #     # #     # #       #   #   
//  #     # #     # #     #    #    #     # #     # #       #    #  
//   #####   #####   #####     #    ####### #     # ####### #     # 
                                                                
export const Customer = (props) => {

    
  return (
    <div>
      <Form.Item name="customerId" hidden>
        <Input />
      </Form.Item>
      <Form.Item
        label="Утасны дугаар"
        rules={[
          {
            required: true, 
            message: "Энэ талбарыг бөглөнө үү."
          },
          {
            pattern: /[0-9]{8}/,
            message: 'Утасны дугаар буруу байна. Жишээ: 99999999',
          }
        ]}
        name="phone"
        className="w-full"
      >
        <Input style={{ width: '100%' }}  maxLength="8" placeholder="Таны утасны дугаар"/> 
      </Form.Item>
      <Form.Item
        label="Овог"
        name="lastName"
      >
        <Input placeholder="Овог"/> 
      </Form.Item>
      <Form.Item
        label="Нэр"
        rules={[{required: true, message: "Энэ талбарыг бөглөнө үү."}]}
        name="firstName"
      >
        <Input placeholder="Нэр"/> 
      </Form.Item>
      <Form.Item
        label="И-Мэйл"
        name="email"
      >
        <Input placeholder="И-Мэйл"/> 
      </Form.Item>
      <Form.Item
        label="Фэйсбүүк холбоос"
        name="facebook"
      >
        <Input placeholder="Фэйсбүүк холбоос"/> 
      </Form.Item>
    </div>  
  )  
};

//  #     # ####### #     # ###  #####  #       ####### 
//  #     # #       #     #  #  #     # #       #       
//  #     # #       #     #  #  #       #       #       
//  #     # #####   #######  #  #       #       #####   
//   #   #  #       #     #  #  #       #       #       
//    # #   #       #     #  #  #     # #       #       
//     #    ####### #     # ###  #####  ####### ####### 
                                                     
export const Vehicle = (props) => {

  const { form } = props;

  return (
    <>
      <Form.Item
        label="Улсын дугаар"
        
        rules={[{
            required: true, 
            message: "Энэ талбарыг бөглөнө үү."
          },
          {
            pattern: /[0-9]{4}[А-ЯӨҮ]{3}/,
            message: 'Улсын дугаар буруу байна. Жишээ: 9999УБР',
          }
        ]}
        name="vehicleCountryCode"
      >
        <Input pattern={new RegExp(/^[a-zA-Z]+$/i)} maxLength="7" placeholder="9999УБА"/> 
      </Form.Item>
      <Form.Item
        label="Машин"
        rules={[{required: true, message: "Энэ талбарыг бөглөнө үү."}]}
        name="vehicle"
      >
        <Input placeholder="Машин"/> 
      </Form.Item>
      <Form.Item
        label="Арлын дугаар"
        rules={[{required: true, message: "Энэ талбарыг бөглөнө үү."}]}
        name="vehicleBodyVinNumber"
      >
        <Input placeholder="Арлын дугаар"/> 
      </Form.Item>
    </>  
  )  
};

//  ######     #    ######  #######  #####  
//  #     #   # #   #     #    #    #     # 
//  #     #  #   #  #     #    #    #       
//  ######  #     # ######     #     #####  
//  #       ####### #   #      #          # 
//  #       #     # #    #     #    #     # 
//  #       #     # #     #    #     #####  
                                         

export const Parts = (props) => {

  const { form } = props;

  const normFile = (e) => {
    return e && e?.file?.response?.url;
  };

  const uploader = (info) => {
    if (info.file.status !== 'uploading') {
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  return (
    <Form.List
      name="goOrderItemDtlDv"
    >
      {(fields, {add, remove}) => (
        <>
          <Form.Item 
            className="w-48" 
          >
            <Button type="dashed" onClick={() => add()} block>
              Сэлбэг нэмэх
            </Button>
          </Form.Item>
          {fields.map((field, index) => (
            <Space key={index} align="baseline">
              <Form.Item
                {...field}
                label="Сэлбэг"
                name={[field.name, "partName"]}
                rules={[{required: true, message: "Энэ хэсгийг бөглөнө үү."}]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                {...field}
                label="Тоо"
                name={[field.name, "qty"]}
                rules={[{required: true, message: "Энэ хэсгийг бөглөнө үү."}]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                {...field}
                label="Зураг"
                name={[field.name, "mainImage"]}
                valuePropName="file"
                getValueFromEvent={normFile}
              >
                <Upload
                  name="file" 
                  listType="picture"
                  action="https://api.cloudinary.com/v1_1/dqcrfshsq/image/upload?upload_preset=ypqwiget"
                  onChange={uploader}
                >
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                {...field}
                label="Мэдээлэл"
                name={[field.name, "description"]}
              >
                <Input.TextArea />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(field.name)} />
            </Space>
          ))}
        </>
      )}
    </Form.List>
  )  
};

