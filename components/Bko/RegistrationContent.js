import React, { useState } from "react";

import {
    Button,
    Form,
    Input,
    Upload,
    message,
    Radio,
    Select
  } from "antd";
  
import { UploadOutlined } from '@ant-design/icons';

import Dragger from "../Atom/Dragger";











const banks = [
    {
        value: "Худалдаа хөгжлийн банк",
        name: "Худалдаа хөгжлийн банк"
    },{
        value: "ХААН банк",
        name: "ХААН банк"
    },{
        value: "Голомт банк",
        name: "Голомт банк"
    },{
        value: "Төрийн банк",
        name: "Төрийн банк"
    },{
        value: "Тээвэр хөгжлийн банк",
        name: "Тээвэр хөгжлийн банк"
    },{
        value: "Ариг банк",
        name: "Ариг банк"
    },{
        value: "Капитрон банк",
        name: "Капитрон банк"
    },{
        value: "Үндэсний хөрөнгө оруулалтын банк",
        name: "Үндэсний хөрөнгө оруулалтын банк"
    },{
        value: "Хас банк",
        name: "Хас банк"
    },{
        value: "Богд банк",
        name: "Богд банк"
    },{
        value: "Чингис Хаан банк",
        name: "Чингис Хаан банк"
    },
]

  //   #####  #     #  #####  ####### ####### #     # ####### ######  
  //  #     # #     # #     #    #    #     # ##   ## #       #     # 
  //  #       #     # #          #    #     # # # # # #       #     # 
  //  #       #     #  #####     #    #     # #  #  # #####   ######  
  //  #       #     #       #    #    #     # #     # #       #   #   
  //  #     # #     # #     #    #    #     # #     # #       #    #  
  //   #####   #####   #####     #    ####### #     # ####### #     # 
                                                
  export const ExistedCustomerInformation = () => {
    
    return (
        <div className="">
                
            <div className="grid grid-cols-4 gap-x-12">
                <div className="md:col-span-2 col-span-4">
                    <Form.Item
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
                        normalize={value => (value || '').toUpperCase()} 
                    >
                        <Input maxLength="10" placeholder="Регисртийн дугаар"/>
                    </Form.Item>   
                    <Form.Item
                    
                        name="lastName"
                        rules={[{
                        required: true, 
                        message: "Овог талбарыг бөглөнө үү."
                        }]}
                        >
                        <Input placeholder="Овог"/>
                    </Form.Item>  
                    <Form.Item
                    
                        name="firstName"
                        rules={[{
                        required: true, 
                        message: "Овог талбарыг бөглөнө үү."
                        }]}
                        >
                        <Input placeholder="Нэр"/>
                    </Form.Item> 
                </div>
                <div className="md:col-span-2 col-span-4">
                    <Form.Item
                        name="id"
                        hidden
                    >
                        <Input required readOnly />
                    </Form.Item>
                    <Form.Item
                    name="redeemId"
                    hidden
                    >
                        <Input required readOnly />
                    </Form.Item>
                </div>
                <div 
                    className="mx-auto col-span-4  md:w-96 w-64"
                    style={{
                        maxWidth: "448px",
                        // width: "250px",
                        minWidth: "120px"
                    }}
                >
                    <Button block size="large" type="primary" htmlType="submit">
                        Илгээх
                    </Button>
                </div>
            </div>
            
        </div>
    )
  }

  export const PersonalInformation = () => {
  
      
    return (
        <div className="grid grid-cols-4 gap-x-12">
            <div className="md:col-span-2 col-span-4">
                <Form.Item
                    name="redeemId"
                    hidden
                >
                    <Input required readOnly />
                </Form.Item>
                <Form.Item
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
                    normalize={value => (value || '').toUpperCase()} 
                    >
                    <Input 
                        maxLength="10" 
                        placeholder="Регисртийн дугаар"
                    />
                </Form.Item>  
                <Form.Item
                    name="lastName"
                    rules={[{
                    required: true, 
                    message: "Овог талбарыг бөглөнө үү."
                    }]}
                    >
                    <Input placeholder="Овог" />
                </Form.Item>  
                <Form.Item
                    name="firstName"
                    rules={[{
                    required: true, 
                    message: "Овог талбарыг бөглөнө үү."
                    }]}
                    >
                    <Input placeholder="Овог"/>
                </Form.Item> 
            </div>
            <div className="md:col-span-2 col-span-4">
                
                <Form.Item
                    name="familyName"
                    rules={[{
                    required: true, 
                    message: "Ургын овог талбарыг бөглөнө үү."
                    }]}
                    >
                    <Input placeholder="Ургийн овог"/>
                </Form.Item>  
                <Form.Item
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
                    <Input placeholder="И-мэйл хаяг"/>
                </Form.Item>  
                <Form.Item
                    name="phone"
                    rules={[{
                    required: true, 
                    message: "Утасны дугаар талбарыг бөглөнө үү."
                    }]}
                    >
                    <Input placeholder="Утасны дугаар"/>
                </Form.Item>  
            </div>
            <div className="col-span-4">
                <Form.Item
                    className="w-full"
                    label=""
                    name="address"
                    rules={[{
                        required: true, 
                        message: "Гэрийн хаяг талбарыг бөглөнө үү."
                    }]}
                    >
                    <Input placeholder="Гэрийн хаяг"/>
                </Form.Item>  
            </div>
        
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
            name="bankName"
            rules={[{
                required: true, 
                message: "Банкны нэр талбарыг бөглөнө үү."
            }]}
        > 
            <Select placeholder="Банкны нэр сонгох">
                {banks.map((item, index) => (
                    <Select.Option key={index} value={item.value}>{item.name}</Select.Option>
                ))}
            </Select>
        </Form.Item>
        <Form.Item
            name="bankAccountNumber"
            rules={[{
                required: true, 
                message: "Банкны дансны дугаар талбарыг бөглөнө үү."
            }]}
        >
            <Input placeholder="Банкны дансны дугаар"/>
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
  
    const [ fileList, setFileList ] = useState([])

    const normFile = (e) => {

      console.log("GETTING VALUE: ", e);
      console.log("GETTING VALUE URL: ", e?.file?.response?.url);
    //   form.setFieldvalue('')
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

    const normFileList = (list) => {

        console.log("AM I HERE: ", list);

        setFileList(list);

        if(!list?.file?.response?.url) return false

        let url = !list?.file?.response?.url;

        // normFile(fileList)
    }
  
    return (
        <>
            <div className="grid grid-cols-4 gap-x-12">
                <div className="md:col-span-2 col-span-4">
                    {/* <div className="w-80 mb-4 border border-blue-600 p-2 rounded text-blue-600">Хэвэлмэл картын зургыг оруулна уу.</div> */}
                    <Form.Item
                        // label="Картын зураг"
                        name="redeemPhoto"
                        valuePropName="file"
                        getValueFromEvent={normFile}
                        rules={[{
                            required: true, 
                            message: "Картын зураг талбарыг бөглөнө үү."
                        }]}
                    >
                        {/* <Dragger normFileList={normFileList} itemName="redeemPhoto" uploader={uploader}/> */}
                        <Upload.Dragger
                            name="file" 
                            listType="picture"
                            action="https://api.cloudinary.com/v1_1/daliec2ib/image/upload?upload_preset=bkoupload"
                            onChange={uploader}
                        >

                            <div className="grid grid-cols-12 mx-4 gap-2">
                                <div
                                    className="md:col-span-1 col-span-2"
                                    style={{
                                        backgroundSize: "contain",
                                        backgroundRepeat: 'no-repeat',
                                        backgroundImage: 'url(https://res.cloudinary.com/daliec2ib/image/upload/v1659795030/BKO/assets/feather_upload-cloud_v8va8k.png)'
                                    }}
                                >

                                </div>
                                <div className="md:col-span-7 col-span-10">
                                    <div style={{color: "#5BA8FF", fontSize: "11px"}}>Хэвлэмэл картын зургийг оруулна уу</div>
                                    <div style={{color: "#E2BA84", fontSize: "11px"}}>JPG, PNG зураг 10MB-с бага хэмжээтэй</div>
                                </div>
                                <div className="md:col-span-4 col-span-1 md:block hidden">
                                    <Button block type="primary" ghost>Зураг</Button>
                                </div>
                            </div>

                            {/* <Button icon={<UploadOutlined />}>Upload</Button> */}
                        </Upload.Dragger>
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
                </div>
                <div className="md:col-span-2 col-span-4">
                    <Form.Item
                        name="idFront"
                        valuePropName="file"
                        getValueFromEvent={normFile}
                        rules={[{
                            required: true, 
                            message: "Урд тал талбарыг бөглөнө үү."
                        }]}
                    >
                        {/* <Dragger uploader={uploader}/> */}

                        <Upload.Dragger
                            name="file" 
                            listType="picture"
                            action="https://api.cloudinary.com/v1_1/daliec2ib/image/upload?upload_preset=bkoupload"
                            onChange={uploader}
                        >

                            <div className="grid grid-cols-12 mx-4 gap-2">
                                <div
                                    className="md:col-span-1 col-span-2"
                                    style={{
                                        backgroundSize: "contain",
                                        backgroundRepeat: 'no-repeat',
                                        backgroundImage: 'url(https://res.cloudinary.com/daliec2ib/image/upload/v1659795030/BKO/assets/feather_upload-cloud_v8va8k.png)'
                                    }}
                                >

                                </div>
                                <div className="md:col-span-7 col-span-10">
                                    <div style={{color: "#5BA8FF", fontSize: "11px"}}>Иргэний үнэмлэхний урд тал</div>
                                    <div style={{color: "#E2BA84", fontSize: "11px"}}>JPG, PNG зураг 10MB-с бага хэмжээтэй</div>
                                </div>
                                <div className="md:col-span-4 col-span-1 md:block hidden">
                                    <Button block type="primary" ghost>Зураг</Button>
                                </div>
                            </div>

                            {/* <Button icon={<UploadOutlined />}>Upload</Button> */}
                        </Upload.Dragger>
                    </Form.Item>
                    <Form.Item
                        name="idBack"
                        valuePropName="file"
                        getValueFromEvent={normFile}
                        rules={[{
                            required: true, 
                            message: "Хойд тал талбарыг бөглөнө үү."
                        }]}
                    >
                        <Upload.Dragger
                            name="file" 
                            listType="picture"
                            action="https://api.cloudinary.com/v1_1/daliec2ib/image/upload?upload_preset=bkoupload"
                            onChange={uploader}
                        >

                            <div className="grid grid-cols-12 mx-4 gap-2">
                                <div
                                    className="md:col-span-1 col-span-2"
                                    style={{
                                        backgroundSize: "contain",
                                        backgroundRepeat: 'no-repeat',
                                        backgroundImage: 'url(https://res.cloudinary.com/daliec2ib/image/upload/v1659795030/BKO/assets/feather_upload-cloud_v8va8k.png)'
                                    }}
                                >

                                </div>
                                <div className="md:col-span-7 col-span-10">
                                    <div style={{color: "#5BA8FF", fontSize: "11px"}}>Иргэний үнэмлэхний ард тал</div>
                                    <div style={{color: "#E2BA84", fontSize: "11px"}}>JPG, PNG зураг 10MB-с бага хэмжээтэй</div>
                                </div>
                                <div className="md:col-span-4 col-span-1 md:block hidden">
                                    <Button block type="primary" ghost>Зураг</Button>
                                </div>
                            </div>

                            {/* <Button icon={<UploadOutlined />}>Upload</Button> */}
                        </Upload.Dragger>
                    </Form.Item>
                    {props.state == false && (
                        <>
                            <Form.Item
                                name="birthCertificateFront"
                                valuePropName="file"
                                getValueFromEvent={normFile}
                                rules={[{
                                    required: true, 
                                    message: "Урд тал талбарыг бөглөнө үү."
                                }]}
                            >
                                <Upload.Dragger
                                    name="file" 
                                    listType="picture"
                                    action="https://api.cloudinary.com/v1_1/daliec2ib/image/upload?upload_preset=bkoupload"
                                    onChange={uploader}
                                >

                                    <div className="grid grid-cols-12 mx-4 gap-2">
                                        <div
                                            className="md:col-span-1 col-span-2"
                                            style={{
                                                backgroundSize: "contain",
                                                backgroundRepeat: 'no-repeat',
                                                backgroundImage: 'url(https://res.cloudinary.com/daliec2ib/image/upload/v1659795030/BKO/assets/feather_upload-cloud_v8va8k.png)'
                                            }}
                                        >

                                        </div>
                                        <div className="md:col-span-7 col-span-10">
                                            <div style={{color: "#5BA8FF", fontSize: "11px"}}>Төрсөний гэрчилгээний урд тал</div>
                                            <div style={{color: "#E2BA84", fontSize: "11px"}}>JPG, PNG зураг 10MB-с бага хэмжээтэй</div>
                                        </div>
                                        <div className="md:col-span-4 col-span-1 md:block hidden">
                                            <Button block type="primary" ghost>Зураг</Button>
                                        </div>
                                    </div>

                                    {/* <Button icon={<UploadOutlined />}>Upload</Button> */}
                                </Upload.Dragger>
                            </Form.Item>
                            <Form.Item
                                name="birthCertificateBack"
                                valuePropName="file"
                                getValueFromEvent={normFile}
                                rules={[{
                                    required: true, 
                                    message: "Хойд тал талбарыг бөглөнө үү."
                                }]}
                            >
                                <Upload.Dragger
                                    name="file" 
                                    listType="picture"
                                    action="https://api.cloudinary.com/v1_1/daliec2ib/image/upload?upload_preset=bkoupload"
                                    onChange={uploader}
                                >

                                    <div className="grid grid-cols-12 mx-4 gap-2">
                                        <div
                                            className="md:col-span-1 col-span-2"
                                            style={{
                                                backgroundSize: "contain",
                                                backgroundRepeat: 'no-repeat',
                                                backgroundImage: 'url(https://res.cloudinary.com/daliec2ib/image/upload/v1659795030/BKO/assets/feather_upload-cloud_v8va8k.png)'
                                            }}
                                        >

                                        </div>
                                        <div className="md:col-span-7 col-span-10">
                                            <div style={{color: "#5BA8FF", fontSize: "11px"}}>Төрсөний гэрчилгээний ард тал</div>
                                            <div style={{color: "#E2BA84", fontSize: "11px"}}>JPG, PNG зураг 10MB-с бага хэмжээтэй</div>
                                        </div>
                                        <div className="md:col-span-4 col-span-1 md:block hidden">
                                            <Button block type="primary" ghost>Зураг</Button>
                                        </div>
                                    </div>

                                    {/* <Button icon={<UploadOutlined />}>Upload</Button> */}
                                </Upload.Dragger>
                            </Form.Item>
                        </>
                    )}
                </div>
            </div>
        </>
    )  
  };
  
  