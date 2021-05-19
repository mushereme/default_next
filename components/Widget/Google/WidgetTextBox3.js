import { Image, Row, Col } from "antd";
import { isEmpty } from "lodash";
import ReactMarkdown from "react-markdown";
import GoogleDiv from "components/Widget/Google/GoogleSmalls/GoogleDiv";
import GoogleCloudinaryImage from "components/Widget/Google/GoogleSmalls/GoogleCloudinaryImage";

export default function WidgetTextBox3({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;

  return (
    <Row type="flex" style={{ marginTop: "30px" }} gutter={16}>
      {rows?.map((item, index) => (
        <Col
          lg={{ span: 8 }}
          md={{ span: 12 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
          key={index}
        >
          <div
            style={{
              height: "100%",
              marginBottom: "40px",
            }}
          >
            <Row gutter={16}>
              <Col span={13}>
                <GoogleCloudinaryImage image={item?.image} />
              </Col>
              <Col span={11}>
                {!isEmpty(item?.title?.value) && (
                  <GoogleDiv
                    item={item.title}
                    defaultStyle={{ fontWeight: "600" }}
                    defaultClassName="mb-3"
                  >
                    {item?.title?.value}
                  </GoogleDiv>
                )}
                {!isEmpty(item?.desc?.value) && (
                  <GoogleDiv item={item.desc}>
                    <ReactMarkdown>{item?.desc?.value}</ReactMarkdown>
                  </GoogleDiv>
                )}
              </Col>
            </Row>
          </div>
        </Col>
      ))}
    </Row>
  );
}
