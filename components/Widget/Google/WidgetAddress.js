import React, { useState, useEffect } from "react";
import { Row, Col, Divider } from "antd";
// import { callData } from "lib/googleSheetFunction";

const WidgetAddress = ({ doc, sheetName }) => {
  const [myData, setMyData] = useState([]);

  // useEffect(() => {
  //   callData(doc, sheetName, setMyData);
  // }, [doc]);

  // console.log("myData", myData);
  return (
    <>
      {myData.map((item, index) => (
        <Row type="flex" style={{ marginTop: "150px" }} key={index}>
          <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <div style={{ height: "100%", padding: "19% 0" }}>
              <div
                className="gx-mt-5"
                style={{
                  fontSize: "2.2rem",
                  fontWeight: "300",
                  ...JSON.parse(item.title.note || "{}"),
                }}
              >
                {item.title.value}
              </div>

              <hr
                style={{
                  width: "30%",
                  backgroundColor: "#084ea3",
                  height: "3px",
                }}
              />

              <div
                dangerouslySetInnerHTML={{ __html: item.desc.value }}
                className="gx-mt-5"
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  lineHeight: "1.6",
                  ...JSON.parse(item?.desc?.note || "{}"),
                }}
              />
              <div
                className="gx-mt-3 gx-mb-5"
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.4",
                  ...JSON.parse(item.desc2.note || "{}"),
                }}
              >
                {item.desc2.value}
              </div>
            </div>
          </Col>
          <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <div
              style={{
                backgroundColor: "#fff",
                backgroundImage: `url(${item?.image?.value || ""})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center bottom",
                width: "100%",
                minHeight: "350px",
                height: "100%",
                ...JSON.parse(item?.image?.note || "{}"),
              }}
            />
          </Col>
        </Row>
      ))}
    </>
  );
};

export default WidgetAddress;
