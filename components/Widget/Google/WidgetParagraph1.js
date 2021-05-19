import { isEmpty } from "lodash";
import ReactMarkdown from "react-markdown";
import GoogleDiv2 from "components/Widget/Google/GoogleSmalls/GoogleDiv2";

export default function WidgetParagraph1({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;

  return (
    <div className="container mx-auto">
      {rows?.map((item, index) => (
        <GoogleDiv2
          item={item.desc}
          defaultClassName="mb-5"
          key={index}
          isMarkdown={true}
        />
      ))}
    </div>
  );
}
