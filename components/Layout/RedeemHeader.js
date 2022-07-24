import React from "react";

import Slider from "react-slick";

export const RedeemHeader = (props) => {

  console.log("BANNER LIST: ", props.data)
  console.log(props.data.length)

  return (
    <div
      style={{
        minHeight: '544px',
        backgroundColor: "#41469a",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: "contain",
        backgroundImage: `url(${props?.data[props.data.length - 1]?.imageUrl})`  
      }}
    >
      <div className="container mx-auto py-auto"> 
        <div className="bko-panel">
          <div
            className="bko-floater"
            style={{
              maxWidth: '800px',
              backgroundImage: 'url(https://res.cloudinary.com/daliec2ib/image/upload/v1657371105/BKO/confetti-4c93fa8b6ba8308f1a53d773624917152c2543f020d11e006b1aaa7a2414a557_tyqe41.png)'
            }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

