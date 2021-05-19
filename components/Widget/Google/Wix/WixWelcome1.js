import React, { useState } from "react";

import { Row, Col, Popover } from "antd";
import { isEmpty } from "lodash";
import ReactMarkdown from "react-markdown";
import GoogleDiv from "components/Widget/Google/GoogleSmalls/GoogleDiv";
import GoogleDiv2 from "../GoogleSmalls/GoogleDiv2";

export default function WixWelcome1({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;
  
  // console.log("ROOOOWS: ", rows)


  return rows.map((item, index) => {
    return (
      <Row className="h-full lg:h-screen">
        <Col
          sm={24}
          md={24}
          lg={24}
          className="mx-auto h-2/6 flex"
        >
          <div className="h-full text-center">
            <GoogleDiv2
              item={item.title}
              defaultStyle={{ fontWeight: "600" }}
              defaultClassName="mt-5 mb-3 text-lg lg:text-8xl lg:mt-24 "
              isMarkdown={true}
            />

            <GoogleDiv2
              item={item.desc}
              defaultClassName="mb-5"
              isMarkdown={true}
            />
          </div>
        </Col>
        <Col
          sm={24}
          md={24}
          lg={24}
          className="h-4/6"
        >
          <div 
            className="h-full"
            style={{
              backgroundColor: "#fff",
              backgroundImage: `url(${item?.image?.value || ""})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              width: "100%",
              minHeight: "350px",
              height: "100%",
              ...JSON.parse(item?.image?.note || "{}")
            }}
          >
          </div>
        </Col>
      </Row>
    )
  });
}

