import { Row, Col } from "antd";
import { isEmpty } from "lodash";
import GoogleDiv2 from "components/Widget/Google/GoogleSmalls/GoogleDiv2";
import GoogleCloudinaryImage from "components/Widget/Google/GoogleSmalls/GoogleCloudinaryImage";

export default function WidgetTextBox2({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;

  return (
    <Row type="flex" style={{ marginTop: "30px" }} gutter={48}>
      {rows?.map(
        (item, index) =>
          !isEmpty(item?.desc?.value) && (
            <Col
              lg={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
              key={index}
            >
              <div
                style={{
                  height: "100%",
                }}
                className="mb-20"
              >
                <GoogleCloudinaryImage image={item?.image} />

                <GoogleDiv2
                  item={item.title}
                  defaultStyle={{ fontWeight: "600" }}
                  defaultClassName="mt-5 mb-3"
                  isMarkdown={true}
                />

                <GoogleDiv2 item={item.desc} isMarkdown={true} />
              </div>
            </Col>
          )
      )}
    </Row>
  );
}
