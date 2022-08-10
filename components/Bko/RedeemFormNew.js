import React, { useState } from "react";
import { Button, Form, Input } from "antd";

import OTPInput from "../Atom/OTPInput/main";
import { MaskedInput } from "antd-mask-input";

const RedeemFormNew = (props) => {

  const [ input, setInput ] = useState('');

  const handleChange = (value) => {
    setInput(value);
  }

  const onFinish = (values) => {
    // console.log("FINSIHD :", values);

    if(values?.serialNumber) {
      
      let val = values?.serialNumber.split('-');
      let temp = ''; 

      val.map(item => {
        temp += item
      })
      
      values.serialNumber = temp;
    }

    props.onFinish(values)
  }

  return (
    <div className="bko-border -mb-6">
      <Form
        onFinish={onFinish}
      >
        <div className="sm:block hidden md:mb-8 mb-6">
          <Form.Item
            name="serialNumber"
          >
            <OTPInput 
              value={input}
              onChange={handleChange}
              numInputs={12}
              separator={'-'}
            />
          </Form.Item>
        </div>
        <div className="sm:hidden block md:mb-8 mb-6">
          <Form.Item
            name="serialNumber"
            >
            {/* <Input placeholder="xxxx-xxxx-xxxx" maxLength={12} /> */}
            <MaskedInput mask={'0000-0000-0000'}  />
          </Form.Item>
        </div>
        <Form.Item>
          <Button
            type="primary"
            block
            size="large"
            htmlType="submit"
          >
            Мэдээлэл илгээх
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default RedeemFormNew;