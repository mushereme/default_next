import React, { useEffect, useState } from "react";
import { Form, message, Steps } from "antd"
import { PersonalInformation, BankInformation, SupportingDocuments, ExistedCustomerInformation } from "./RegistrationContent";
import RegistrationAction from "./RegistrationAction";

export const RegistrationForm = (props) => {

  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [props.state.customer])

  const [current, setCurrent] = useState(0);
  const [hide, setHide] = useState(true);
  const [register, setRegister] = useState('');

  const steps = [
    {
      title: 'Хувийн мэдээлэл',
      content: <PersonalInformation form={form}/>,
    },
    {
      title: 'Банкны мэдээлэл',
      content: <BankInformation form={form} />,
    },
    {
      title: 'Бичиг баримт',
      content: <SupportingDocuments form={form} state={hide}/>,
    }
  ]
  
  const changeStep = (step) => {
    setCurrent(step);
  }

  const onFieldChange = (value) => {

    if(value.isAdult == 0) {
      setHide(false);
    } else if (value.isAdult == 1) {
      setHide(true);
    }

    if(value.registerNumber) {
      if(value.registerNumber.length === 10) {
        // console.log("REGISTER IS HERE: ", value.registerNumber);
        setRegister(value.registerNumber);
        props.onCheck({
          registerNumber: value.registerNumber
        });
      }
    }
  }

  const onFinishFailed = (value) => {
    // console.log("VALUES:", value);

    value.errorFields.map((item) => {
      message.error(item.errors)
    })
  } 

  return (
    <div 
      className="bg-white container mx-auto py-8 px-4 -mt-12 rounded-xl" style={{
      maxWidth: "811px"
    }}>
      <div className="text-indigo-800 text-xl">МЭДЭЭЛЭЛ ОРУУЛАХ</div>
      <div className="text-gray text-sm">Та үнэт цаасны данс нээлгэхэд шаардлагатай мэдээллээ үнэн зөв оруулна уу. Та өөрийн Регистрийн дугаарыг зөвхөн кириллээр бичиж оруулаарай.</div>
      <div className="my-8 mx-auto">
        <Form
          form={form}
          name="checkRedeem"
          layout="vertical"
          initialValues={{
            redeemId: props?.state?.redeem?.id,
            registerNumber: register,
            ...props.state.customer
          }}
          onFinish={props?.onFinish}
          onValuesChange={onFieldChange}
          // labelCol={{ span: 4 }}
          // wrapperCol={{ span: 16 }}
          scrollToFirstError={true}
          onFinishFailed={onFinishFailed}
          
        > 
          {!props?.state?.customer && (
            <Steps progressDot current={current}>
              {steps.map((item, index) => (
                <Steps.Step key={index} title={item.title} />
              ))}
            </Steps>
          )}
          
          
          <div className="steps-content my-16">
            {!props?.state?.customer 
              ? steps.map((step, index) => (
                <div key={index} className={`${index === current ? 'relative' : 'hidden'}`}>
                  {step?.content}
                </div>
              ))
              : <ExistedCustomerInformation />
            }
          </div>
          {!props?.state?.customer && (
            <RegistrationAction form={form} current={current} changeStep={changeStep} steps={steps.length}/>
          )}
        </Form>
      </div>
    </div>
  ) 
}