import { useState, } from "react";
import StepAction from "./StepAction";
import { Vehicle, Parts, Customer } from "./StepContent";

//FORM COMPS
import {
  Input,
  Form,
  Button,
  DatePicker,
  Steps,
  message
} from "antd";


const OrderForm = (props) => {

  const { detail, onChange, onFinish, form } = props;
  const [current, setCurrent] = useState(0);
  
  const changeStep = (step) => {
    setCurrent(step);
  }

  const steps = [
    {
      title: 'Харилцах',
      content: <Customer form={form}/>,
    },
    {
      title: 'Машин',
      content: <Vehicle form={form} />,
    },
    {
      title: 'Сэлбэг',
      content: <Parts form={form}/>,
    }
  ]

  

  return (
    <div className="lg:w-196 sm:w-128">
      <Form
        layout="horizontal"
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{}}
        onFieldsChange={onChange}
        onFinish={onFinish}
        onFinishFailed={onFinish}
        autoComplete="off"
      >
        <Steps progressDot current={current}>
          {steps.map((item, index) => (
            <Steps.Step key={index} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content my-16">{steps.map((step, index) => (
          <div key={index} className={`${index === current ? 'relative' : 'hidden'}`}>
            {step.content}
          </div>
        ))}</div>
        <StepAction form={form} current={current} changeStep={changeStep} steps={steps.length}/>
      </Form>
    </div>
  )
}

export default OrderForm;