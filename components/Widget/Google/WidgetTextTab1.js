import { Tabs } from "antd";
import GoogleCloudinaryImage from "components/Widget/Google/GoogleSmalls/GoogleCloudinaryImage";
import GoogleDiv2 from "components/Widget/Google/GoogleSmalls/GoogleDiv2";

export default function WidgetTextTab1({ myWidget, widgets }) {
  const { mainConfig, header, rows } = myWidget.widget;

  return (
    <div className="container mx-auto">
      <Tabs defaultActiveKey="0" centered type="line">
        {rows.map((item, index) => (
          <Tabs.TabPane
            tab={item.title.value}
            key={index}
            style={{
              ...JSON.parse(item.title.note || "{}"),
            }}
          >
            <GoogleCloudinaryImage
              image={item.image}
              width="1000"
              className="mt-10"
            />

            <GoogleDiv2
              item={item.desc}
              defaultClassName="w-2/4 mt-5"
              isMarkdown={true}
            />
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
}
