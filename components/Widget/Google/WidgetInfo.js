import React, { useState, useEffect } from "react";
import { Row, Col, Tabs, Collapse } from "antd";
import { callData } from "lib/googleSheetFunction";
import WidgetPart from "./WidgetPart";
import WidgetPhotoSlide from "./WidgetPhotoSlide";

const WidgetInfo = ({ doc, sheetName }) => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    callData(doc, sheetName, setMyData);
  }, [doc]);

  return (
    <div className="container mx-auto mt-36">
      <Row type="flex" style={{ marginTop: "120px" }}>
        <Col md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          <Tabs defaultActiveKey="0" centered className="gx-mt-5" type="line">
            {myData.map((item, index) => (
              <Tabs.TabPane
                tab={item.title.value}
                key={index}
                className="gx-pt-5"
                style={{
                  ...JSON.parse(item.title.note || "{}"),
                }}
              >
                <Row>
                  <Col md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <div
                      style={{
                        marginTop: "20px",
                        ...JSON.parse(item?.desc?.note || "{}"),
                      }}
                    >
                      {item?.desc?.value}
                    </div>
                  </Col>
                  <Col md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                    <WidgetPhotoSlide
                      doc={doc}
                      sheetName={`*Photo${item.title.value}`}
                    />
                  </Col>
                </Row>
              </Tabs.TabPane>
            ))}
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default WidgetInfo;
