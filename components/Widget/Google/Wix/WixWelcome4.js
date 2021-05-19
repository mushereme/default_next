import React, { useState } from "react";

import { Row, Col, Popover } from "antd";
import { isEmpty } from "lodash";
import ReactMarkdown from "react-markdown";
import GoogleDiv from "components/Widget/Google/GoogleSmalls/GoogleDiv";
import GoogleDiv2 from "../GoogleSmalls/GoogleDiv2";

export default function WixWelcome2({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;
  
  // console.log("ROOOOWS: ", rows)


  return rows.map((item, index) => {
    return (
      <div className="relative h-full lg:h-screen max-w-7xl mx-auto" key={index}>
        <div className="relative lg:h-auto h-48 ">
          <main>
            <div className="">
              <GoogleDiv2 
                item={item.title}
                defaultClassName="text-4xl mt-8 lg:text-8xl lg:mt-16 text-center uppercase"
                isMarkdown={false}
              />
              <GoogleDiv2
                item={item.subtitle}
                defaultClassName="text-base text-center mt-4"
                isMarkdown={false}
              />
              <GoogleDiv2
                item={item.desc}
                defaultClassName="text-sm text-center mt-4"
                isMarkdown={false}
              />
            </div>
          </main>
        </div>
        <div className="relative h-auto lg:h-3/5 px-8 py-8 lg:px-16 lg:pt-16">
          {/* <div className="h-full"> */}
            <video
              src={item?.video?.value}
              muted={true}
              autoPlay="autoplay"
              loop="loop"
              preload=""
              playsInline=""
              className="relative h-auto lg:h-full mx-auto"
              // style={{ width: "100%", height: "auto" }}
            ></video>
          {/* </div> */}
        </div>
      </div>
    );
  });
}
