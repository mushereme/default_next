import React, { useState, useEffect } from "react";
import { Row, Col, Table } from "antd";
import { callData } from "lib/googleSheetFunction";

const WidgetOpeningHour = ({ doc, sheetName }) => {
  const [myData, setMyData] = useState([]);
  const [myHeader, setMyHeader] = useState([]);

  useEffect(() => {
    callData(doc, sheetName, setMyData, setMyHeader);
  }, [doc]);

  // console.log("myData", myData);
  // console.log("myHeader", myHeader);

  const myTableColumn = Object.values(myHeader) || [];
  let columns = [];
  myTableColumn.map((item, index) => {
    const myColumn = {
      title: item,
      key: item,
      dataIndex: [item, "value"],
      render: (value, record) => {
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
      <Row type="flex" style={{ marginTop: "120px" }}>
        <Col md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
          <div
            style={{
              margin: "0 0 30px",
              fontSize: "1rem",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Ажиллах цаг
          </div>
          <Table
            className="mungundent-table"
            size="large"
            // columns={myWidgetOpeningHourData.columns}
            columns={columns}
            dataSource={myData}
            pagination={false}
            bordered={false}
            rowKey={(record) => record.key.value}
          />
        </Col>
      </Row>
    </>
  );
};

export default WidgetOpeningHour;
