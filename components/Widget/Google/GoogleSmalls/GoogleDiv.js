import Link from "next/link";
import { isEmpty } from "lodash";

export default function GoogleDiv({
  item,
  defaultStyle,
  defaultClassName,
  isMarkdown,
  children,
}) {
  if (isEmpty(item?.value)) return null;

  // console.log("DDDDDDDD", item);
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
      {children}
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
