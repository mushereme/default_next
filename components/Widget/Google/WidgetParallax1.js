import { isEmpty } from "lodash";
import ReactMarkdown from "react-markdown";
import GoogleDiv2 from "components/Widget/Google/GoogleSmalls/GoogleDiv2";

export default function WidgetParallax1({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;

  return (
    <div>
      {rows?.map((item, index) => (
        <section
          key={index}
          class="flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover"
          style={{
            backgroundColor: "#fff",
            backgroundImage: `url(${item?.image?.value || ""})`,
            ...JSON.parse(item?.image?.note || "{}"),
          }}
        >
          <div class="m-20 p-7 bg-gray-900 bg-opacity-50 rounded-xl">
            <GoogleDiv2
              item={item.desc}
              defaultClassName="mb-5"
              key={index}
              isMarkdown={true}
            />
          </div>
        </section>
      ))}
    </div>
  );
}
