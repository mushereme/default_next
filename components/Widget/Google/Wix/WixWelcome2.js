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
        <div className="relative h-96 lg:h-3/5 px-8 pt-8 lg:px-16">
          <div style={{
            backgroundColor: "#fff",
            backgroundImage: `url(${item?.image?.value || ""})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            width: "100%",
            minHeight: "350px",
            height: "100%",
            ...JSON.parse(item?.image?.note || "{}")
          }}>

          </div>
        </div>
        <div className="relative lg:h-2/5 h-48 ">
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
      </div>
    );
  });
}
