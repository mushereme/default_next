import { isEmpty } from "lodash";

export default function WidgetVideoBanner1({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;

  return (
    <div>
      {rows?.map(
        (item, index) =>
          !isEmpty(item?.video?.value) && (
            <div
              key={index}
              style={{
                height: "100%",
                marginBottom: "40px",
              }}
            >
              <video
                src={item?.video?.value}
                muted={true}
                autoPlay="autoplay"
                loop="loop"
                preload=""
                playsInline=""
                style={{ width: "100%", height: "auto" }}
              ></video>
            </div>
          )
      )}
    </div>
  );
}
