import React from "react";
import { Spin } from "antd";
import { isEmpty } from "lodash";

const HeaderWidgetNew = (props) => {
  const { title } = props;

  if (isEmpty(title?.value)) return null;

  const {
    textFormat,
    backgroundColor,
    horizontalAlignment = "left",
    hyperlinkDisplayType,
    verticalAlignment,
    wrapStrategy,
  } = title.effectiveFormat;
  const { bold: textBold = false } = textFormat;
  const {
    red: foregroundRed = 0,
    green: foregroundGreen = 0,
    blue: foregroundBlue = 0,
  } = textFormat.foregroundColor;

  return (
    <>
      <div
        style={{
          color: `rgb(${foregroundRed * 255}, ${foregroundGreen * 255}, ${
            foregroundBlue * 255
          })`,
          textAlign: `${horizontalAlignment?.toLowerCase()}`,
          fontWeight: "600",
          fontSize: "1.3rem",
          marginBottom: "1.3rem",
          ...JSON.parse(title.note || "{}"),
        }}
        className="container mx-auto"
      >
        {title.value}
      </div>

      {props.children}
    </>
  );
};

export default HeaderWidgetNew;
