import React, { useState, useEffect } from "react";

import { Button, Row, Col } from "antd";
import MyIcon from "lib/iconFunction";
import { callData } from "lib/googleSheetFunction";

const myWidgetTextBoxData = [
  {
    desc:
      "Бид гэр бүлийн бүх гишүүдийг жигд хянаж, насанд туршид нь халамжлах бодлого барьдаг.",
  },
  {
    desc:
      "Гэр бүлийн бүх гишүүдийн шүд эрүүл, цагаан, өв тэгш байх нь бидний хувьд жинхэнэ аз жаргалд тооцогдоно.",
  },
  {
    desc:
      "Бид зөвхөн Япон, Герман, Америкийн өндөр технологийн шүдний аппарат хэрэгсэл, түүхий эд материалыг сонгож хэрэглэдэг.",
  },
];

const WidgetTextBox = ({ doc, sheetName }) => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    callData(doc, sheetName, setMyData);
  }, [doc]);

  // console.log("myData", myData);

  return (
    <>
      <Row type="flex">
        <Col md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          {/* dsfdsfds */}
          <div
            style={{
              backgroundColor: "#084ea3",
              width: "100%",
              minHeight: "250px",
              padding: "12% 20%",
            }}
          >
            <div
              style={{ fontSize: "1rem", lineHeight: "1.4", color: "#f0f0f0" }}
            >
              <ul>
                {myData.map((item, index) => (
                  <li
                    key={index}
                    className="gx-my-3"
                    style={{ ...JSON.parse(item?.desc?.note || "{}") }}
                  >
                    {item?.desc?.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default WidgetTextBox;
