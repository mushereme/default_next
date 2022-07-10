import React from "react";
import {
    Button
} from "antd";
  
  const RegistrationAction = (props) => {
  
    return (
      <div className="steps-action">
        {props.current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => props.changeStep(props.current - 1)}>
            Өмнөх
          </Button>
        )}
        {props.current < props.steps - 1 && (
          <Button type="primary" ghost onClick={() => props.changeStep(props.current + 1)}>
            Дараагийн
          </Button>
        )}
        {props.current === props.steps - 1 && (
          <Button type="primary" htmlType="submit">
            Илгээх
          </Button>
        )}
      </div>      
    )
  }
  
  export default RegistrationAction;