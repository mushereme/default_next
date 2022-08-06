import React from "react";
import {
    Button
} from "antd";
  
  const RegistrationAction = (props) => {
  
    return (
      <div 
        className="steps-action mx-auto" 
        style={{
          width: "448px"
        }}
      >
        {props.current < props.steps - 1 && (
          <Button block size="large" type="primary"  onClick={() => props.changeStep(props.current + 1)}>
            Дараагийн
          </Button>
        )}
        {props.current === props.steps - 1 && (
          <Button block size="large" type="primary" htmlType="submit">
            Илгээх
          </Button>
        )}
        {props.current > 0 && (
          <Button block size="large" type="link" onClick={() => props.changeStep(props.current - 1)}>
            Өмнөх
          </Button>
        )}
      </div>      
    )
  }
  
  export default RegistrationAction;