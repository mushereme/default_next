import React from "react";
const [api, contextHolder] = message.useMessage();


export default Popup = () => {

  return (
    <div>
      {/* contextHolder is inside Context1 which means api will get value of Context1 */}
      {contextHolder}
    </div>
  )
}
