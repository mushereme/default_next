import React from "react";

import {
    Button,
    Form,
    Input,
    Upload,
    message,
    Radio
  } from "antd";
  
import { UploadOutlined } from '@ant-design/icons';
   
  //   #####  #     #  #####  ####### ####### #     # ####### ######  
  //  #     # #     # #     #    #    #     # ##   ## #       #     # 
  //  #       #     # #          #    #     # # # # # #       #     # 
  //  #       #     #  #####     #    #     # #  #  # #####   ######  
  //  #       #     #       #    #    #     # #     # #       #   #   
  //  #     # #     # #     #    #    #     # #     # #       #    #  
  //   #####   #####   #####     #    ####### #     # ####### #     # 
                                                                  
  export const PersonalInformation = () => {
  
      
    return (
      <div>
        <Form.Item
            name="redeemId"
            hidden
        >
            <Input required readOnly />
        </Form.Item>
        <Form.Item
            label="Регисртийн дугаар"
            name="registerNumber"
            rules={[{
                required: true, 
                message: "Регисртийн дугаар талбарыг бөглөнө үү."
            },
            {
                pattern: /[А-ЯӨҮ]{1}[А-ЯӨҮ]{1}[0-9]{8}/,
                message: 'Регистрийн дугаар буруу байна. Жишээ: УБ99999999',
            }
            ]}
            >
            <Input maxLength="10"/>
        </Form.Item>  
        <Form.Item
            label="Ургийн овог"
            name="familyName"
            rules={[{
            required: true, 
            message: "Ургын овог талбарыг бөглөнө үү."
            }]}
            >
            <Input />
        </Form.Item>  
        <Form.Item
            label="Овог"
            name="lastName"
            rules={[{
            required: true, 
            message: "Овог талбарыг бөглөнө үү."
            }]}
            >
            <Input />
        </Form.Item>  
        <Form.Item
            label="Нэр"
            name="firstName"
            rules={[{
            required: true, 
            message: "Овог талбарыг бөглөнө үү."
            }]}
            >
            <Input />
        </Form.Item> 
        <Form.Item
            label="Гэрийн хаяг"
            name="address"
            rules={[{
            required: true, 
            message: "Гэрийн хаяг талбарыг бөглөнө үү."
            }]}
            >
            <Input />
        </Form.Item>  
        <Form.Item
            label="И-мэйл хаяг"
            name="email"
            rules={[
                {
                    required: true, 
                    message: "Энэ талбарыг бөглөнө үү."
                },
                {
                    type: 'email',
                    message: 'Имэйл хаяг оруулна уу.'
                }
            ]}
            >
            <Input />
        </Form.Item>  
        <Form.Item
            label="Утасны дугаар"
            name="phone"
            rules={[{
            required: true, 
            message: "Утасны дугаар талбарыг бөглөнө үү."
            }]}
            >
            <Input />
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
                                                       
  export const BankInformation = () => {
  
    return (
      <>
        <Form.Item
            label="Банкны нэр"
            name="bankName"
            rules={[{
                required: true, 
                message: "Банкны нэр талбарыг бөглөнө үү."
            }]}
        > 
            <Input />
        </Form.Item>
        <Form.Item
            label="Банкны дансны дугаар"
            name="bankAccountNumber"
            rules={[{
                required: true, 
                message: "Банкны дансны дугаар талбарыг бөглөнө үү."
            }]}
        >
            <Input />
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
                                           
  
  export const SupportingDocuments = (props) => {
  
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
        <>
            <div className="w-80 mx-auto mb-4 border border-blue-600 p-2 rounded text-blue-600">Хэвэлмэл картын зургыг оруулна уу.</div>
            <Form.Item
                label="Картын зураг"
                name="redeemPhoto"
                valuePropName="file"
                getValueFromEvent={normFile}
                rules={[{
                    required: true, 
                    message: "Урд тал талбарыг бөглөнө үү."
                }]}
            >
                <Upload
                    name="file" 
                    listType="picture"
                    action="https://api.cloudinary.com/v1_1/daliec2ib/image/upload?upload_preset=bkoupload"
                    onChange={uploader}
                >
                <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Form.Item>
            <Form.Item
                name="isAdult"
                label="Насанд хүрсэн эсэх"
                rules={[{
                    required: true, 
                    message: "Насанд хүрсэн эсэх талбарыг бөглөнө үү."
                }]}
            >
                <Radio.Group>
                    <Radio value="1">Тийм</Radio>
                    <Radio value="0">Үгүй</Radio>
                </Radio.Group>
            </Form.Item>
            <div className="w-80 mx-auto mb-4 border border-blue-600 p-2 rounded text-blue-600">{props.state == true ? 'Иргэний үнэмлэхний зураг оруулна уу!' : 'Эцэг эхийн иргэний үнэмлэх!'}</div>
            <Form.Item
                label="Урд тал"
                name="idFront"
                valuePropName="file"
                getValueFromEvent={normFile}
                rules={[{
                    required: true, 
                    message: "Урд тал талбарыг бөглөнө үү."
                }]}
            >
                <Upload
                    name="file" 
                    listType="picture"
                    action="https://api.cloudinary.com/v1_1/daliec2ib/image/upload?upload_preset=bkoupload"
                    onChange={uploader}
                >
                <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Form.Item>
            <Form.Item
                label="Хойд тал"
                name="idBack"
                valuePropName="file"
                getValueFromEvent={normFile}
                rules={[{
                    required: true, 
                    message: "Хойд тал талбарыг бөглөнө үү."
                }]}
            >
                <Upload
                    name="file" 
                    listType="picture"
                    action="https://api.cloudinary.com/v1_1/daliec2ib/image/upload?upload_preset=bkoupload"
                    onChange={uploader}
                >
                <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            </Form.Item>
            {props.state == false && (
                <>
                    <div className="w-80 mx-auto mb-4 border border-blue-600 p-2 rounded text-blue-600">Төрсөний гэрчилгээний зураг оруулна уу!</div>
                    <Form.Item
                        label="Урд тал"
                        name="birthCertificateFront"
                        valuePropName="file"
                        getValueFromEvent={normFile}
                        rules={[{
                            required: true, 
                            message: "Урд тал талбарыг бөглөнө үү."
                        }]}
                    >
                        <Upload
                        name="file" 
                        listType="picture"
                        action="https://api.cloudinary.com/v1_1/daliec2ib/image/upload?upload_preset=bkoupload"
                        onChange={uploader}
                        >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        label="Хойд тал"
                        name="birthCertificateBack"
                        valuePropName="file"
                        getValueFromEvent={normFile}
                        rules={[{
                            required: true, 
                            message: "Хойд тал талбарыг бөглөнө үү."
                        }]}
                    >
                        <Upload
                        name="file" 
                        listType="picture"
                        action="https://api.cloudinary.com/v1_1/daliec2ib/image/upload?upload_preset=bkoupload"
                        onChange={uploader}
                        >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item>
                </>
            )}
        </>
    )  
  };
  
  