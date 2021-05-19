import React, { useState, useEffect } from "react";

import { Row, Col, Card } from "antd";
import { callData } from "lib/googleSheetFunction";

const WidgetBoxThree = ({ doc, sheetName }) => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    callData(doc, sheetName, setMyData);
  }, [doc]);

  // console.log("myData", myData);

  return (
    <>
      <div
        style={{
          margin: "110px 0 0",
          fontSize: "1rem",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Аз жаргалтай амьдрахад туслах гурван үйлчилгээ
      </div>
      <Row type="flex" style={{ padding: "10% 0" }}>
        {myData.map((item, index) => (
          <Col
            md={{ span: 8, offset: 0 }}
            sm={{ span: 20, offset: 2 }}
            xs={{ span: 22, offset: 1 }}
            key={index}
          >
            <Card
              hoverable={true}
              style={{
                height: "100%",
                minHeight: "250px",
                textAlign: "center",
              }}
              className="mungundent-card"
            >
              <div className="gx-mt-5">
                <img
                  src={item.image.value}
                  style={{
                    width: "80px",
                    height: "auto",
                    ...JSON.parse(item?.image?.note || "{}"),
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  letterSpacing: "2px",
                  fontSize: "26px",
                  fontWeight: 600,
                  marginTop: "70px",
                  ...JSON.parse(item.title.note || "{}"),
                }}
              >
                {item.title.value}
              </div>
              <div
                className="gx-mt-4"
                style={{ ...JSON.parse(item?.desc?.note || "{}") }}
              >
                {item?.desc?.value}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default WidgetBoxThree;
