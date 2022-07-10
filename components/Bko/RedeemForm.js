import React from "react";
import { Button, Form, Input } from "antd"


export const RedeemForm = (props) => {

  const [form] = Form.useForm();

  return (
    <div>
      <div className="text-center text-indigo-800 text-3xl mt-16">ТАНЫ БКО БЭЛГИЙН КАРТЫГ ХҮЛЭЭЖ БАЙНА</div>
      <div className="text-center text-gray-500 text-xl mt-4">Та өөрийн картын дугаарыг оруулна уу</div>
      <div className="my-8 mx-auto w-96">
        <Form
          form={form}
          name="checkRedeem"
          onFinish={props.onFinish}
          >
          <Form.Item
            name="serialNumber"
            rules={[{
              required: true, 
              message: "Энэ талбарыг бөглөнө үү."
            }]}
            >
            <Input required placeholder="XXXX-XXXX-XXXX" maxLength={12} size="large" />
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