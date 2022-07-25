import React from "react";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons"; 

const BkoLogo = () => {

  return (
    <div className="flex items-center justify-start w-auto mt-2">
      <div >
        <a href="https://www.facebook.com/bkocapital/" className="">
          <FacebookOutlined 
            className="text-white text-3xl"
            style={{
              // color: "white"
              // fontSize: '32px',
            }}
          />
        </a>
        {/* <img src='https://res.cloudinary.com/daliec2ib/image/upload/v1658147950/BKO/assets/273269846_956798281707222_3269984056906119710_n_gccix1.png' width="50px" height="auto"/> */}
      </div>
      <div className="ml-2 font-bold">
        <a>
          <InstagramOutlined 
            className="text-white text-3xl"
          />
        </a>
      </div>
    </div>
  )
}

export default BkoLogo;
