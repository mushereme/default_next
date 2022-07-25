import React from "react";
import { Button, Form, Input } from "antd"
import { MaskedInput } from "antd-mask-input";


export const RedeemForm = (props) => {

  const [form] = Form.useForm();

  return (
    <div>
      <div className="text-center text-indigo-800 text-3xl mt-16">ТАНЫ БКО БЭЛГИЙН КАРТЫГ ХҮЛЭЭЖ БАЙНА</div>
      <div className="text-center text-gray-500 text-xl mt-4">Та өөрийн картын дугаарыг оруулна уу</div>
      <div className="my-8 mx-auto">
        <Form
          form={form}
          name="checkRedeem"
          onFinish={props.onFinish}
          className="mx-auto"
          style={{
            margin: 'auto',
            maxWidth: "140px",
            minWidth: "140px"
          }}
          >
          <Form.Item
            name="serialNumber"
            rules={[{
              required: true, 
              message: "Энэ талбарыг бөглөнө үү."
            }]}
            
            >
              <MaskedInput mask={'0000-0000-0000'} />
            {/* <Input placeholder="XXXX-XXXX-XXXX" maxLength={12} size="large" /> */}
          </Form.Item>
          <Form.Item className="text-center ">
            <Button
              type="primary"
              htmlType="submit"
            > 
              Код илгээх
            </Button>
          </Form.Item>
        </Form>

      </div>

    </div>
  ) 
}