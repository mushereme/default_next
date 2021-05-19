import { Layout } from "antd";

import Menu from "components/Moto/Header/Menu";
import Footer from "components/Moto/Footer/Footer";

export default function LayoutPage({ item, children, className }) {
  return (
    <>
      <Layout>
        {/* <WidgetHeadPage myWidget={mySheet.widgets[0]} /> */}
        <Menu />

        <Layout.Content className={`${className} w-full mx-auto"`}>
          {/* <Layout.Content> */}
          {children}
        </Layout.Content>
        <Footer />
      </Layout>
    </>
  );
}
