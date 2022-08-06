import React from "react";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons"; 

const BkoLogo = () => {

  return (
    <div>
      <div 
        className="flex items-center justify-start w-auto"
      >
        <div
          className="md:w-10 md:h-10 w-6 h-6 mr-3"
          style={{
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundImage: "url(https://res.cloudinary.com/daliec2ib/image/upload/v1659778438/BKO/assets/Phone_1_bqwhrv.png"
          }}
        > 

        </div>
        <div
          className="text-base md:text-3xl text-sm"
          style={{
            fontStyle: "normal",
            fontWeight: 400,
            // fontSize: "28px",
            lineHeight: "54px",
            /* or 193% */

            display: "flex",
            alignItems: "center",

            /* Primary/❖ 400 */
            color: "#5BA8FF"

          }}     
        >
          Phone: (976) 9920-3430
        </div>
      </div>
      <div 
        className="flex items-center justify-start w-auto -mt-4"
      >
        <div
          className="md:w-10 md:h-10 w-6 h-6 mr-3"
          style={{
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundImage: "url(https://res.cloudinary.com/daliec2ib/image/upload/v1659777561/BKO/assets/Icon_set_rykom3.png)"
          }}
        > 

        </div>
        <div
          className="text-base md:text-3xl text-sm"
          style={{
            fontStyle: "normal",
            fontWeight: 400,
            // fontSize: "28px",
            lineHeight: "54px",
            /* or 193% */

            display: "flex",
            alignItems: "center",

            /* Primary/❖ 400 */
            color: "#5BA8FF"

          }}  
        >
          Email: info@bkocapital.mn
        </div>
      </div>
    </div>
  )
}

export default BkoLogo;
