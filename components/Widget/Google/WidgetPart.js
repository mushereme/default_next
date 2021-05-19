import React, { useState, useEffect } from "react";
import { Row, Col, Table, Image } from "antd";
import { callData } from "lib/googleSheetFunction";

const WidgetPart = ({ doc, sheetName }) => {
  const [myData, setMyData] = useState([]);
  const [myHeader, setMyHeader] = useState([]);

  useEffect(() => {
    callData(doc, sheetName, setMyData, setMyHeader);
  }, [doc]);

  const myTableColumn = Object.values(myHeader) || [];
  let columns = [];
  myTableColumn.map((item, index) => {
    const myColumn = {
      title: item,
      key: item,
      dataIndex: [item, "value"],
      render: (value, record) => {
        if (item === "image") {
          return (
            <Image
              src={value}
              style={{
                borderRadius: "20px",
                maxWidth: "250px",
                ...JSON.parse(record[item].note || "{}"),
              }}
            />
          );
        }
        if (item === "title") {
          return (
            <span
              style={{
                fontWeight: "600",
                ...JSON.parse(record[item].note || "{}"),
              }}
            >
              {value}
            </span>
          );
        }
        if (item === "price") {
          return (
            <span
              style={{
                fontWeight: "400",
                color: "#22bb33",
                ...JSON.parse(record[item].note || "{}"),
              }}
            >
              {value}
            </span>
          );
        }
        return (
          <span style={{ ...JSON.parse(record[item].note || "{}") }}>
            {value}
          </span>
        );
      },
    };
    columns.push(myColumn);
  });

  return (
    <>
      <Table
        className="mungundent-table gx-mt-5"
        size="large"
        showHeader={false}
        columns={columns}
        dataSource={myData}
        pagination={false}
        bordered={false}
        tableLayout="fixed"
        rowKey={(record) => record.title.value}
      />
    </>
  );
};

export default WidgetPart;
