import React from "react";
import {
    Button
} from "antd";
  
  const RegistrationAction = (props) => {
  
    const { current, changeStep, steps } = props;
  
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
          <Button type="primary" htmlType="submit">
            Илгээх
          </Button>
        )}
      </div>      
    )
  }
  
  export default RegistrationAction;