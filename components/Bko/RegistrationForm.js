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
      content: <SupportingDocuments form={form} Form={Form} state={hide}/>,
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
    console.log("VALUES:", value);

    value.errorFields.map((item) => {
      message.error(item.errors)
    })
  } 

  return (
    <div className="md:mx-0 mx-6">
      <div 
        className="md:container mx-auto bg-white rounded-xl shadow-2xl pb-8"
        // className="bg-white md:container md:mx-auto py-8 rounded-xl shadow-2xl" 
        style={{
          // margin: "0 24px 0 24px"
        }}
        >
        <div className=" bko-border">
          <Form
            form={form}
            name="checkRedeem"
            layout="horizontal"
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
              <Steps type="navigation" progressDot current={current}>
                {steps.map((item, index) => (
                  <Steps.Step status={index > current - 1} key={index} title={item.title} />
                ))}
              </Steps>
            )}
            
            <div className="text-center mx-6">
              <div 
                className="md:pt-12 pt-6 uppercase md:text-3xl text-base"
                style={{
                  fontStyle: 'normal',
                  fontWeight: 600,
                  // fontSize: "28px",
                  lineHeight: "32px",
                  color: '#5BA8FF'
                  /* identical to box height, or 114% */
                }}
              >
                Та үнэт цаасны данс нээлгэхэд шаардлагатай мэдээллээ үнэн зөв оруулна уу.
              </div>
              <div 
                className="mt-4 md:text-lg text-sm"
                style={{
                  fontWeight: 500,
                  color: '#DDAC6D',
                  lineHeight: "24px"
                }}
              >
                Та өөрийн Регистрийн дугаарыг зөвхөн кириллээр бичиж оруулаарай.
              </div>
            </div>
        
            <div 
              className="steps-content md:mt-12 mt-6 mx-auto px-6"
              style={{
                maxWidth: '946px'
              }}
            >
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
    </div>
  ) 
}