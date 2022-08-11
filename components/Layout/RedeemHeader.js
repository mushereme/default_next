import React from "react";

import BkoCard from "./BkoCard";

export const RedeemHeader = (props) => {

  // console.log("BANNER LIST: ", props.data)
  // console.log(props.data.length)

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 lg:h-screen h-auto">  
        <div className="col-span-12 lg:col-span-6 my-auto">
          <div 
            className="mx-auto" 
            style={{
              maxWidth: "700px"
            }}
          >
            <div className="xl:mt-6 lg:mt-3 lg:mx-2 md:mt-6 mt-6 md:mx-8 mx-2">
              <div className="mx-auto text-center">
                <div
                  className="xl:36 lg:h-24 md:h-36 h-24"
                  style={{
                    maxHeight: "134px",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundImage: "url(https://res.cloudinary.com/daliec2ib/image/upload/v1660047532/BKO/assets/Group_3_oeuvkx.png)"
                  }}
                >
                </div>
                <div
                  className="xl:h-14 lg:h-8 md:h-14 h-10 md:my-6 my-4"
                  style={{
                    maxHeight: "134px",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundImage: "url(https://res.cloudinary.com/daliec2ib/image/upload/v1659614762/BKO/assets/%D0%A2%D0%B0%D0%B2%D1%82%D0%B0%D0%B9_%D0%BC%D0%BE%D1%80%D0%B8%D0%BB_1_qpycbe.png)"
                    
                  }}
                >
                </div>
              </div>
              <div className="bg-white rounded-xl xl:p-12 lg:p-6 md:p-12 p-8 mx-6 shadow-xl">
                <div 
                  className=""
                >
                  <div 
                    className="md:text-xl text-base text-center"
                    style={{
                      // fontFamily: 'Rubik',
                      fontStyle: "normal",
                      fontWeight: 600,
                      // fontSize: "28px",
                      lineHeight: "32px",
                      /* or 114% */
                      // display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      /* Primary/❖ 400 */
                      color: "#5BA8FF"

                    }}
                  >
                    ТАНЫ БКО БЭЛГИЙН КАРТЫГ ХҮЛЭЭЖ БАЙНА
                  </div>
                  <div
                    className="text-center md:mt-8 mt-4 md:mb-8 mb-4 md:text-base text-sm" 
                    style={{
                      fontStyle: "normal",
                      fontWeight: 400,
                      // fontSize: "18px",
                      lineHeight: "24px",
                      color: "#DDAC6D"
                    }}
                    >
                    Та өөрийн картын дугаарыг оруулна уу
                  </div>
                  {props.children}
                </div>
              </div>
            </div>
            <div>
              <BkoCard />
            </div>
          </div>
        </div>
        <div 
          className="lg:block col-span-6 hidden"
        >
          <div
            className="m-5 rounded-xl"
            style={{
              minHeight: '544px',
              height: "95%",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: "cover",
              backgroundImage: `url(${props?.data[props.data.length - 1]?.imageUrl})`  
            }}
          > 
          </div>
        </div>
      </div>
    </div>
  )
}

// <div

//     >
//       <div className="container mx-auto py-auto"> 
//         <div className="bko-panel">
//           <div
//             className="bko-floater"
//             style={{
//               maxWidth: '500px',
//               // backgroundImage: 'url(https://res.cloudinary.com/daliec2ib/image/upload/v1657371105/BKO/confetti-4c93fa8b6ba8308f1a53d773624917152c2543f020d11e006b1aaa7a2414a557_tyqe41.png)'
//             }}
//           >
//             {props.children}
//           </div>
//         </div>
//       </div>
//     </div>