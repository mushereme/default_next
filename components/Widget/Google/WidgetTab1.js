import { Row, Col, Tabs } from "antd";
import { PageWidgetLoad } from "./PageContent";

export default function WidgetTab1({ myWidget, widgets }) {
  const { mainConfig, header, rows } = myWidget.widget;

  return (
    <Tabs defaultActiveKey="0" centered type="line">
      {rows.map((item, index) => (
        <Tabs.TabPane
          tab={item.title.value}
          key={index}
          style={{
            ...JSON.parse(item.title.note || "{}"),
          }}
        >
          <PageWidgetLoad
            widgets={widgets}
            widgetName={item?.widgetName?.value}
          />
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
}
