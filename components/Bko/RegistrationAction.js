import React from "react";
import {
    Button
} from "antd";
  
  const RegistrationAction = (props) => {
  
    return (
      <div 
        className="steps-action mx-auto md:w-96 w-64" 
        // style={{
        //   maxWidth: "448px",
        //   width: "440px",
        //   minWidth: "120px"
        // }}
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