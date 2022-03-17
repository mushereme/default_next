import {
  Button,
  Form,
  message
} from "antd";

const StepAction = (props) => {

  const { current, changeStep, steps, form } = props;

  return (
    <div className="steps-action">
      {current > 0 && (
        <Button style={{ margin: '0 8px' }} onClick={() => changeStep(current - 1)}>
          Өмнөх
        </Button>
      )}
      {current < steps - 1 && (
        <Button type="primary" ghost onClick={() => changeStep(current + 1)}>
          Дараагийн
        </Button>
      )}
      {current === steps - 1 && (
        <Button type="primary" htmlType="submit" onClick={() => form.submit()}>
          Илгээх
        </Button>
      )}
    </div>      
  )
}

export default StepAction;