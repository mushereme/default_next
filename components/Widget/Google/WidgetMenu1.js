import Link from "next/link";
import { useRouter } from "next/router";
import { Layout, Alert, Button, Menu, Breadcrumb, Row, Col } from "antd";
import { findIndex, isEmpty } from "lodash";
import GoogleDiv from "components/Widget/Google/GoogleSmalls/GoogleDiv";
import GoogleCloudinaryImage from "components/Widget/Google/GoogleSmalls/GoogleCloudinaryImage";

export default function WidgetMenu1({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;
  const router = useRouter();

  // console.log("MEEEEENUUUUUUU mainConfig", mainConfig);
  // console.log("MEEEEENUUUUUUU header", header);
  // console.log("MEEEEENUUUUUUU rows", rows);
  // console.log("MEEEEENUUUUUUU router", router);
  const { asPath } = router; //  /kia/seltos
  const myMenuIndex = findIndex(rows, { link: { value: asPath } }).toString();

  // console.log("myMenuIndex", myMenuIndex);

  return (
    <>
      <Layout.Header
        className={`${
          mainConfig?.fixed?.value || ""
        } shadow-md z-50 w-full bg-gradient-to-r from-gray-50 to-gray-100
        `}
        style={{
          height: mainConfig.height.value,
        }}
      >
        <div className="container mx-auto h-full">
          <div className="logo" />
          <Menu
            className="h-full flex bg-transparent"
            style={{ lineHeight: "1", borderBottom: "none" }}
            mode="horizontal"
            selectedKeys={[myMenuIndex]}
          >
            {rows.map((menuItem, index) => {
              if (!isEmpty(menuItem.title.value)) {
                return (
                  <Menu.Item key={index} className="h-full text-xs">
                    <Link href={menuItem.link.value}>
                      <a
                        style={{
                          display: "flex",
                          alignItems: "center",
                          height: "100%",
                        }}
                      >
                        <GoogleCloudinaryImage
                          image={menuItem.image}
                          width={80}
                          className="mr-2"
                          style={{
                            maxHeight: `calc(100% - 14px)`,
                          }}
                        />
                        {menuItem.title.value}
                      </a>
                    </Link>
                  </Menu.Item>
                );
              }
            })}
          </Menu>
        </div>
      </Layout.Header>
      {mainConfig?.fixed?.value === "fixed" && (
        <div style={{ marginTop: mainConfig.height.value }}></div>
      )}
    </>
  );
}
