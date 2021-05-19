import React from "react";

import { Row, Col, Popover } from "antd";
import { isEmpty } from "lodash";
import GoogleDiv2 from "components/Widget/Google/GoogleSmalls/GoogleDiv2";
import GoogleCloudinaryImage from "components/Widget/Google/GoogleSmalls/GoogleCloudinaryImage";

export default function WidgetHero2({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;

  return rows?.map((item, index) => {
    return (
      <>
        <GoogleCloudinaryImage
          key={index}
          image={item.image}
          width="auto"
          className="rounded-none w-full"
        />
      </>
    );
  });
}
