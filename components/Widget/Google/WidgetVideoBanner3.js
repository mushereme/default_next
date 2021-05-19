import Vimeo from "@u-wave/react-vimeo";
import { isEmpty } from "lodash";

export default function WidgetVideoBanner3({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;

  return (
    <div>
      {rows?.map(
        (item, index) =>
          !isEmpty(item?.video?.value) && (
            <div key={index}>
              <Vimeo
                video={item?.video?.value}
                autoplay={true}
                muted={true}
                background={true}
                width="100%"
                height="auto"
                loop={true}
                showByline={true}
                controls={false}
                responsive={true}
              />
            </div>
          )
      )}
    </div>
  );
}
