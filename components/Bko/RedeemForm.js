import React, { useState } from "react";
import { Button, Form, Input } from "antd"

import OTPInput from "../Atom/OTPInput/main";
import { MaskedInput } from "antd-mask-input";

export const RedeemForm = (props) => {

  // const [form] = Form.useForm();

  
  const [input, setInput] = useState('')

  const handleChange = (value) => {
    console.log("changind: ", value);
    setInput(value);
    // form.setFieldValue('serialNumber', value); 
  }

  const onFinish = (value) => {
    console.log("VALUE: ", value);
    // props.onFinish({serialNumber: input})
  }

  return (
    <div>
      <div className="mx-auto text-center">
      <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
            <div 
              className="sm:block hidden"
            >
              <Form.Item
                name="serialNumber"
                rules={[{
                  required: true, 
                  message: "Энэ талбарыг бөглөнө үү."
                }]}
                
                >
                  <div className="multiple-inputs mx-auto">
                    <OTPInput 
                      value={input}
                      onChange={handleChange}
                      numInputs={12}
                      separator={'-'}
                      />
                  </div>
              </Form.Item>
            </div>
              <Form.Item
                name="mobileSerialNumber"
                rules={[{
                  required: true, 
                  message: "Энэ талбарыг бөглөнө үү."
                }]}
              >
                <Input />
                {/* <MaskedInput mask={'0000-0000-0000'} /> */}
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
        </Form>

      </div>

    </div>
  ) 
}