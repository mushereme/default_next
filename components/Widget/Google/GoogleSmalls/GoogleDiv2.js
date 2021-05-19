import Link from "next/link";
import { isEmpty } from "lodash";
import ReactMarkdown from "react-markdown";

export default function GoogleDiv2({
  item,
  defaultStyle,
  defaultClassName,
  isMarkdown = false, //markdown хэрэгжих хэсэг
}) {
  if (isEmpty(item?.value)) return null;

  const {
    textFormat,
    backgroundColor,
    horizontalAlignment = "left",
    hyperlinkDisplayType,
    verticalAlignment,
    wrapStrategy,
  } = item.effectiveFormat;
  const { bold: textBold = false } = textFormat;
  const {
    red: foregroundRed = 0,
    green: foregroundGreen = 0,
    blue: foregroundBlue = 0,
  } = textFormat.foregroundColor;

  const MyValue = () => (
    <>
      {isMarkdown ? (
        <ReactMarkdown>{item?.value}</ReactMarkdown>
      ) : (
        <>{item?.value}</>
      )}
    </>
  );

  const MyDiv = () => (
    <div
      className={defaultClassName}
      style={{
        color: `rgb(${foregroundRed * 255}, ${foregroundGreen * 255}, ${
          foregroundBlue * 255
        })`,
        textAlign: `${horizontalAlignment?.toLowerCase()}`,
        fontWeight: `${textBold ? "600" : "400"}`,
        width: "100%",
        ...defaultStyle,
        ...JSON.parse(item.note || "{}"),
      }}
    >
      <MyValue />
    </div>
  );

  return (
    <>
      {isEmpty(item.hyperlink) ? (
        <MyDiv />
      ) : (
        <Link href={item.hyperlink}>
          <a>
            <MyDiv />
          </a>
        </Link>
      )}
    </>
  );
}
