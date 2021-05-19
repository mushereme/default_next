import React, { useState, useEffect } from "react";
import { Row, Col, Tabs, Collapse } from "antd";
import { callData } from "lib/googleSheetFunction";

const myWidgetInfoData = [
  {
    tabTitle: "Үзлэг",
    desc:
      "Бид гэр бүлийн бүх гишүүдийг жигд хянаж, насанд туршид нь халамжлах бодлого барьдаг.",
    faq: [
      { title: "Ерөнхий үзлэг гэж юу вэ?", desc: "Ерөнхий үзлэгийн тухай" },
      {
        title: "Хэдийн хугацааны давтамжтай үзүүлж байх нь оновчтой вэ?",
        desc: "Ерөнхий үзлэгийн тухай",
      },
    ],
  },
  {
    tabTitle: "Циркон",
    desc:
      "Бид гэр бүлийн бүх гишүүдийг жигд хянаж, насанд туршид нь халамжлах бодлого барьдаг.",
    faq: [
      { title: "Циркон гэж юу вэ?", desc: "Цирконы тухай" },
      { title: "Циркон гэж юу вэ?", desc: "Цирконы тухай" },
    ],
  },
  {
    tabTitle: "Имплант",
    desc:
      "Бид гэр бүлийн бүх гишүүдийг жигд хянаж, насанд туршид нь халамжлах бодлого барьдаг.",
    faq: [
      { title: "Имплант гэж юу вэ?", desc: "Имплантын тухай" },
      { title: "Имплант гэж юу вэ?", desc: "Имплантын тухай" },
    ],
  },
];

const WidgetFaq = ({ doc, sheetName }) => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    callData(doc, sheetName, setMyData);
  }, [doc]);

  return (
    <>
      <Collapse className="mungundent-collapse">
        {myData.map((item, index) => (
          <Collapse.Panel header={item.title.value} key={index}>
            <p>{item?.desc?.value}</p>
          </Collapse.Panel>
        ))}
      </Collapse>
    </>
  );
};

export default WidgetFaq;
