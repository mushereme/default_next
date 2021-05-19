import dynamic from "next/dynamic";
import { Empty, Skeleton, Image, Row, Col, Spin } from "antd";
import { isEmpty, find } from "lodash";
import HeaderWidgetNew from "./HeaderWidgetNew";

const WidgetList = {
  WidgetHeadH1: dynamic(() => import(`./WidgetHeadH1`)),
  WidgetHero1: dynamic(() => import(`./WidgetHero1`)),
  WidgetHero2: dynamic(() => import(`./WidgetHero2`)),
  WidgetImages1: dynamic(() => import(`./WidgetImages1`)),
  WidgetImages2: dynamic(() => import(`./WidgetImages2`)),
  WidgetParagraph1: dynamic(() => import(`./WidgetParagraph1`)),
  WidgetParallax1: dynamic(() => import(`./WidgetParallax1`)),
  WidgetSlider1: dynamic(() => import(`./WidgetSlider1`)),
  WidgetSlider2: dynamic(() => import(`./WidgetSlider2`)),
  WidgetStatistic1: dynamic(() => import(`./WidgetStatistic1`)),
  WidgetStatistic2: dynamic(() => import(`./WidgetStatistic2`)),
  WidgetTab1: dynamic(() => import(`./WidgetTab1`)),
  WidgetTable1: dynamic(() => import(`./WidgetTable1`)),
  WidgetTextBox2: dynamic(() => import(`./WidgetTextBox2`)),
  WidgetTextBox3: dynamic(() => import(`./WidgetTextBox3`)),
  WidgetTextBox4: dynamic(() => import(`./WidgetTextBox4`)),
  WidgetTextImage1: dynamic(() => import(`./WidgetTextImage1`)),
  WidgetTextImage2: dynamic(() => import(`./WidgetTextImage2`)),
  WidgetTextImage3: dynamic(() => import(`./WidgetTextImage3`)),
  WidgetTextImage4: dynamic(() => import(`./WidgetTextImage4`)),
  WidgetTextImage5: dynamic(() => import(`./WidgetTextImage5`)),
  WidgetTextImage6: dynamic(() => import(`./WidgetTextImage6`)),
  WidgetTextImage7: dynamic(() => import(`./WidgetTextImage7`)),
  WidgetTextImage8: dynamic(() => import(`./WidgetTextImage8`)),
  WidgetTextImage9: dynamic(() => import(`./WidgetTextImage9`)),
  WidgetTextTab1: dynamic(() => import(`./WidgetTextTab1`)),
  WidgetVideoBanner1: dynamic(() => import(`./WidgetVideoBanner1`)),
  WidgetVideoBanner3: dynamic(() => import(`./WidgetVideoBanner3`)),
  WixWelcome1: dynamic(() => import(`./Wix/WixWelcome1`)),
  WixWelcome2: dynamic(() => import(`./Wix/WixWelcome2`)),
  WixWelcome3: dynamic(() => import(`./Wix/WixWelcome3`)),
  WixWelcome4: dynamic(() => import(`./Wix/WixWelcome4`)),
  WixAbout1: dynamic(() => import(`./Wix/WixAbout1`)),
};

const LoadWidgetComponent = ({ myWidget, widgets, Component }) => {
  if (isEmpty(myWidget)) return null;
  const { mainConfig, header, rows } = myWidget?.widget;
  return (
    <div
      className={`${mainConfig?.widgetClassName?.value || ""}`}
      style={{ ...(mainConfig?.widgetStyle?.value || {}) }}
    >
      <HeaderWidgetNew title={mainConfig?.title || ""} />
      <Component myWidget={myWidget} widgets={widgets} />
    </div>
  );
};

export default function PageContent({ widgets = [] }) {
  // console.log("PageContent widgets", widgets);

  const components = widgets.map((item, index) => {
    const myWidgetName = item.widget?.mainConfig?.widgetName?.value || "";
    if (myWidgetName.charAt(0) === "*") {
      //*-ээр эхэлсэн байвал уг Widget-ийг дүрслэхгүй. Харин Widget дотор дүрслэх ёстой.
      return null;
    }
    return WidgetList[myWidgetName];
  });
  return (
    <>
      {components.map((Component, index) => {
        if (isEmpty(Component)) return null; // хоосон байвал дүрслэх гэж оролдохгүй. *-той нэртэй үед энэ алдаа гардаг.
        return (
          <LoadWidgetComponent
            key={index}
            myWidget={widgets[index]}
            widgets={widgets}
            Component={Component}
          />
        );
      })}
    </>
  );
}

//Page доторх Tab мэтэд дүрслэх Component-ийг энүүгээр дуудна.
export const PageWidgetLoad = ({ widgets = [], widgetName = "" }) => {
  const myWidgetName = widgetName.slice(4, widgetName.length);

  const myWidget = find(widgets, {
    widget: { mainConfig: { widgetName: { value: widgetName } } },
  });

  return (
    <LoadWidgetComponent
      myWidget={myWidget}
      widgets={widgets}
      Component={WidgetList[myWidgetName]}
    />
  );
};
