import Link from "next/link";
import { Layout, Alert, Button, Menu, Breadcrumb, Row, Col } from "antd";
import { isEmpty } from "lodash";
import GoogleDiv from "components/Widget/Google/GoogleSmalls/GoogleDiv";
import ReactMarkdown from "react-markdown";
import GoogleCloudinaryImage from "components/Widget/Google/GoogleSmalls/GoogleCloudinaryImage";

export default function WidgetMenu1({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;

  // console.log("Footer mainConfig", mainConfig);
  // console.log("Footer header", header);
  // console.log("Footer rows", rows);

  return (
    <Layout.Footer
      className={`z-50 w-full bg-gradient-to-r from-gray-500 to-gray-700 pb-24 text-white
        `}
    >
      <div className="container mx-auto h-full">
        <Row gutter={16}>
          <Col span={12}>
            <GoogleCloudinaryImage
              image={mainConfig?.logo}
              // style={{ ...JSON.parse(mainConfig.logo.note || "{}") }}
            />
            <GoogleDiv
              item={mainConfig?.title || ""}
              defaultStyle={{ fontWeight: "600" }}
              defaultClassName="text-white"
            >
              {mainConfig?.title?.value}
            </GoogleDiv>

            <GoogleDiv
              item={mainConfig?.desc}
              defaultClassName="mt-3 text-white"
            >
              <ReactMarkdown>{mainConfig?.desc?.value}</ReactMarkdown>
            </GoogleDiv>
          </Col>
          <Col span={6}>
            {rows.map((linkItem, index) => {
              return (
                <div className="mb-2" key={index}>
                  <Link href={linkItem.link.value}>
                    <a style={{}} className="text-image">
                      {linkItem.title.value}
                    </a>
                  </Link>
                </div>
              );
            })}
          </Col>
          <Col span={6}>
            {[
              mainConfig.Email,
              mainConfig.Telephone,
              mainConfig.Mobile,
              mainConfig.Mobile2,
              mainConfig.Website,
              mainConfig.Facebook,
              mainConfig.Twitter,
              mainConfig.Youtube,
              mainConfig.Instagram,
            ].map((linkItem, index) => {
              if (!isEmpty(linkItem?.value || null))
                return (
                  <div className="mb-2" key={index}>
                    <GoogleDiv item={linkItem} defaultClassName="text-image">
                      {linkItem.value}
                    </GoogleDiv>
                  </div>
                );
            })}
          </Col>
        </Row>
      </div>
    </Layout.Footer>
  );
}
