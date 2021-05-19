import GoogleDiv2 from "components/Widget/Google/GoogleSmalls/GoogleDiv2";

export default function WidgetHeadH1({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;

  return (
    <div className="container mx-auto">
      {rows?.map((item, index) => (
        <GoogleDiv2
          item={item.title}
          defaultClassName="py-16 text-4xl"
          key={index}
          isMarkdown={true}
        />
      ))}
    </div>
  );
}
