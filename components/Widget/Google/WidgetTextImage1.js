import { Row, Col } from "antd";
import GoogleDiv2 from "components/Widget/Google/GoogleSmalls/GoogleDiv2";
import { isEmpty } from "lodash";

export default function WidgetTextImage1({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;

  return rows.map((item, index) => {
    if (
      isEmpty(item?.title?.value) &&
      isEmpty(item?.desc?.value) &&
      isEmpty(item?.image?.value)
    )
      return null;

    return (
      <div className="container mx-auto">
        <Row type="flex" key={index} gutter={16}>
          <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <div style={{ height: "100%", padding: "0 0" }}>
              <GoogleDiv2
                item={item.title}
                defaultStyle={{ fontWeight: "600" }}
                defaultClassName="mt-5 mb-3"
                isMarkdown={true}
              />

              <GoogleDiv2
                item={item.desc}
                defaultClassName="mb-5"
                isMarkdown={true}
              />
            </div>
          </Col>
          <Col md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
            <div
              style={{
                // backgroundColor: "#fff",
                backgroundImage: `url(${item?.image?.value || ""})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center bottom",
                width: "100%",
                minHeight: "50px",
                height: "100%",
                ...JSON.parse(item?.image?.note || "{}"),
              }}
            />
          </Col>
        </Row>
      </div>
    );
  });
}
