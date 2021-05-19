import "swiper/swiper-bundle.css";
import { Row, Col } from "antd";
import { isEmpty } from "lodash";
import GoogleDiv2 from "components/Widget/Google/GoogleSmalls/GoogleDiv2";
import GoogleCloudinaryImage from "components/Widget/Google/GoogleSmalls/GoogleCloudinaryImage";

export default function WidgetImages1({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;

  return (
    <div className="container mx-auto">
      <Row>
        {rows?.map((item, index) => {
          if (!isEmpty(item?.image || null))
            return (
              <Col
                lg={{ span: 8 }}
                md={{ span: 8 }}
                sm={{ span: 8 }}
                xs={{ span: 8 }}
                key={index}
              >
                <GoogleCloudinaryImage image={item?.image} />
              </Col>
            );
        })}
      </Row>
    </div>
  );
}
