import React from "react";
import { Spin } from "antd";
import { isEmpty } from "lodash";

const HeaderWidget = (props) => {
  const { loading, widget } = props;

  // console.log("widget", widget);
  if (isEmpty(widget?.title?.value)) return null;

  return (
    <>
      {!loading ? (
        <div
          style={{ ...widget?.style?.value }}
          className={`${widget?.className?.value}`}
        >
          {!isEmpty(widget?.title?.value) && (
            <div
              style={{
                fontWeight: "600",
                fontSize: "1.2rem",
                ...JSON.parse(widget.title.note || "{}"),
              }}
            >
              {widget.title.value}
            </div>
          )}
          {props.children}
        </div>
      ) : (
        <Spin />
      )}
    </>
  );
};

export default HeaderWidget;
