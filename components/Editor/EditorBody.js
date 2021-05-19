import Output from "editorjs-react-renderer";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

import { isEmpty } from "lodash";

export default function EditorBody({ myBody }) {
  if (isEmpty(myBody)) return null;

  //   const htmlEntities = new Html5Entities(); //Body тагуудыг зөв харуулдаг болгох

  //   let myBodyReady = htmlEntities.decode(myBody) || "";
  let myBodyReady = myBody || "";
  myBodyReady = myBodyReady
    .split('"/storage')
    .join('"https://www.moto.mn/storage');
  myBodyReady = myBodyReady
    .split('"../storage')
    .join('"https://www.moto.mn/storage');

  let myOutputBody = "";

  if (myBodyReady !== "") {
    if (myBodyReady.indexOf('"blocks"') !== -1) {
      const editorConfig = {
        codeBox: {
          disableDefaultStyle: true,
        },
        header: {
          disableDefaultStyle: true,
        },
        paragraph: {
          disableDefaultStyle: true,
        },
        image: {
          disableDefaultStyle: true,
        },
        embed: {
          disableDefaultStyle: true,
        },
        list: {
          disableDefaultStyle: true,
        },
        checklist: {
          disableDefaultStyle: true,
        },
        table: {
          disableDefaultStyle: true,
        },
        quote: {
          disableDefaultStyle: true,
        },
        warning: {
          disableDefaultStyle: true,
        },
        delimiter: {
          disableDefaultStyle: true,
        },
      };

      const CustomParagraphRenderer = ({ data, style, classNames, config }) => {
        // validate props here...or not :)

        let content = null;

        if (typeof data === "string") content = data;
        else if (
          typeof data === "object" &&
          data.text &&
          typeof data.text === "string"
        )
          content = data.text;

        console.log("classNames", classNames);
        console.log("data", data);
        console.log("config", config);

        return content ? (
          <p
            style={style}
            className={`my-8 ${!isEmpty(classNames) ? classNames : ""}`}
          >
            {ReactHtmlParser(content)}
          </p>
        ) : (
          ""
        );
      };

      const renderers = {
        // paragraph: CustomParagraphRenderer,
      };

      const classes = {
        header: "text-lg font-bold mt-12",
        image: {
          img: "rounded",
          figure: "",
          figcaption: "",
        },
        video: {
          video: "rounded",
          figure: "",
          figcaption: "",
        },
        embed: {
          video: "",
          figure: "",
          figcaption: "",
        },
        paragraph: "mt-6 mb-8",
        list: {
          container: "",
          listItem: "list-disc  ml-12",
        },
        checklist: {
          container: "",
          item: "",
          checkbox: "",
          label: "",
        },
        table: {
          table: "",
          tr: "",
          th: "",
          td: "",
        },
        quote: {
          container: "",
          content: "",
          author: "",
          message: "",
        },
        codeBox: {
          container: "",
          code: "",
        },
        warning: {
          container: "",
          icon: "",
          title: "",
          message: "",
        },
        delimiter: {
          container: "",
          svg: "",
          path: "",
        },
      };

      try {
        myOutputBody = (
          <Output
            data={JSON.parse(myBodyReady)}
            config={editorConfig}
            renderers={renderers}
            classNames={classes}
          />
        );
      } catch (e) {
        myOutputBody = "";
      }
    } else {
      myOutputBody = (
        <div
          dangerouslySetInnerHTML={{
            __html: myBodyReady,
          }}
        ></div>
      );
    }
  }

  return myOutputBody;
}
