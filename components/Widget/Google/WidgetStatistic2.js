import { Row, Col } from "antd";
import { isEmpty } from "lodash";
import GoogleDiv2 from "components/Widget/Google/GoogleSmalls/GoogleDiv2";
import GoogleCloudinaryImage from "components/Widget/Google/GoogleSmalls/GoogleCloudinaryImage";

export default function WidgetStatistic1({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;

  return (
    <div className="container mx-auto">
      <Row type="flex" gutter={24}>
        {rows?.map(
          (item, index) =>
            !isEmpty(item?.desc?.value) && (
              <Col
                lg={{ span: 8 }}
                md={{ span: 8 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
                key={index}
              >
                <GoogleDiv2
                  item={item.subhead}
                  defaultClassName="text-center"
                  isMarkdown={true}
                />

                <GoogleDiv2
                  item={item.title}
                  defaultStyle={{ fontWeight: "700" }}
                  defaultClassName="mt-5 mb-3 text-3xl text-center"
                  isMarkdown={false}
                />

                <GoogleDiv2
                  item={item.desc}
                  defaultClassName="text-center"
                  isMarkdown={true}
                />
              </Col>
            )
        )}
      </Row>
    </div>
  );
}
