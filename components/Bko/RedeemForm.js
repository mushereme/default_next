import React, { useState } from "react";
import { Button, Form, Input } from "antd"

import MultipleInput from "../Atom/MultiInput/main";
import OTPInput from "../Atom/OTPInput/main";

import { MaskedInput } from "antd-mask-input";
import RICIBs from 'react-individual-character-input-boxes';

export const RedeemForm = (props) => {

  const [form] = Form.useForm();

  
  const [input, setInput] = useState('')

  const handleChange = (value) => {
    setInput(value);
    // form.setFieldValue('serialNumber', value); 
  }

  const onFinish = (value) => {
    console.log("BALUE: ", value);
    props.onFinish({serialNumber: input})
  }

  return (
    <div>
      <div className="mx-auto text-center">
        <Form
          form={form}
          name="checkRedeem"
          // onFinish={props.onFinish}
          className="mx-auto"
          onChange={() => {
            // form.setFieldValue('serialNumber', input);
          }}
          style={{
            margin: 'auto',
            // maxWidth: "150px",
            minWidth: "150px"
          }}
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
          <div className="text-center mx-6">
              <Button
                onClick={onFinish}
                block
                size="large"
                type="primary"
                htmlType="submit"
              > 
                Код илгээх
              </Button>
          </div>
        </Form>

      </div>

    </div>
  ) 
}