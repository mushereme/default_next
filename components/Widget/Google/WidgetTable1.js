import { Image, Table } from "antd";
import MyIcon from "lib/iconFunction";
import GoogleDiv from "components/Widget/Google/GoogleSmalls/GoogleDiv2";
import GoogleCloudinaryImage from "components/Widget/Google/GoogleSmalls/GoogleCloudinaryImage";

export default function WidgetTable1({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;

  const myTableColumn = Object.values(header || {}) || [];
  let columns = [];
  myTableColumn.map((item, index) => {
    const myColumn = {
      title: <span style={{ fontWeight: "600" }}>{item}</span>,
      dataIndex: [item, "value"],
      render: (value, record) => {
        if (value?.indexOf("cloudinary") !== -1) {
          return <GoogleCloudinaryImage image={record[item]} />;
        } else {
          if (value?.charAt(0) === "*") {
            //*Yes *No байгаа
            switch (value) {
              case "*Yes":
                return (
                  <GoogleDiv item={record[item]}>
                    <MyIcon type="iconcheck-solid" />
                  </GoogleDiv>
                );
                break;
              case "*No":
                return (
                  <GoogleDiv item={record[item]}>
                    <MyIcon type="icontimes-solid" />
                  </GoogleDiv>
                );
                break;

              default:
                break;
            }
          } else {
            return <GoogleDiv item={record[item]}>{value}</GoogleDiv>;
          }
        }
      },
    };
    columns.push(myColumn);
  });

  return (
    <div>
      <Table
        className="gx-mt-4"
        style={{ background: "transparent" }}
        sticky={true}
        size="large"
        columns={columns}
        dataSource={rows}
        pagination={false}
        bordered={false}
        tableLayout="fixed"
        rowKey={(record) => record[Object.keys(record)[0]].value} //Эхний баганын утгуудыг авч байна.
      />
    </div>
  );
}
