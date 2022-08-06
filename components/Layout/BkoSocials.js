import React from "react";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons"; 

const BkoLogo = () => {

  return (
    <div className="flex items-center justify-start w-auto mt-6">
      <div className="mr-2">
        <a href="https://www.facebook.com/bkocapital" target="_blank" className="">
          <div
            className="h-12 w-12"
            style={{
              backgroundSize:"contain",
              backgroundPosition: "center",
              backgroundImage: "url(https://res.cloudinary.com/daliec2ib/image/upload/v1659776828/BKO/assets/facebook_echlhy.png)"
            }}
          >

          </div>
          {/* <FacebookOutlined 
            className="text-white text-3xl"
            style={{
              // color: "white"
              // fontSize: '32px',
            }}
          /> */}
        </a>
        {/* <img src='https://res.cloudinary.com/daliec2ib/image/upload/v1658147950/BKO/assets/273269846_956798281707222_3269984056906119710_n_gccix1.png' width="50px" height="auto"/> */}
      </div>
      <div className="ml-2 font-bold">
        <a href="https://www.facebook.com/bkocapital"  target="_blank">
          <div
            className="h-12 w-12"
            style={{
              backgroundSize:"contain",
              backgroundPosition: "center",
              backgroundImage: "url(https://res.cloudinary.com/daliec2ib/image/upload/v1659778438/BKO/assets/Phone_1_bqwhrv.png)"
            }}
          >
          </div>
          {/* <InstagramOutlined 
            className="text-white text-3xl"
          /> */}
        </a>
      </div>
    </div>
  )
}

export default BkoLogo;
