import { useRef } from "react";
import { Button } from "antd";
import MyIcon from "lib/iconFunction";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { isEmpty } from "lodash";
import GoogleDiv2 from "components/Widget/Google/GoogleSmalls/GoogleDiv2";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);

export default function WidgetSlider1({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;

  const topButton = "50%";
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const SamplePrevArrow = (props) => {
    return (
      <div
        style={{
          position: "absolute",
          top: topButton,
          display: "block",
          lineHeight: "0",
          left: "25px",
          zIndex: "12",
          opacity: "0.5",
        }}
      >
        <MyIcon type="iconangleleft" className="text-white text-4xl" />
      </div>
    );
  };

  const SampleNextArrow = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: topButton,
          display: "block",
          lineHeight: "0",
          right: "25px",
          zIndex: "12",
          opacity: "0.5",
        }}
      >
        <MyIcon type="iconangleright" className="text-white text-4xl" />
      </div>
    );
  };

  return (
    <div>
      {/* <HeaderWidget loading={false} widget={mainConfig} /> */}
      <Swiper
        className="relative"
        slidesPerView={1}
        centeredSlides={false}
        centeredSlidesBounds={false}
        preloadImages={true}
        effect="fade"
        loop={true}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        autoplay={{
          delay: 12000,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {rows?.map((item, index) => {
          return (
            <SwiperSlide style={{ height: "550px", width: "auto" }} key={index}>
              <div
                style={{
                  backgroundColor: "#fff",
                  backgroundImage: `url(${item?.image?.value || ""})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  width: "100%",
                  height: "100%",
                  ...JSON.parse(item?.image?.note || "{}"),
                }}
              >
                <div className="container mx-auto">
                  <GoogleDiv2
                    item={item.title}
                    defaultStyle={{ fontWeight: "600" }}
                    defaultClassName="max-w-md text-4xl text-white pt-10"
                    isMarkdown={true}
                  />

                  <GoogleDiv2
                    item={item.desc}
                    defaultClassName="max-w-md text-lg text-white pt-5"
                    key={index}
                    isMarkdown={true}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div style={{ bottom: "30px" }} className="swiper-pagination"></div>

        <div ref={prevRef}>
          <SamplePrevArrow />
        </div>
        <div ref={nextRef}>
          <SampleNextArrow />
        </div>
      </Swiper>
      <style jsx global>
        {`
          .swiper-pagination-bullet-active {
            background-color: white;
          }
        `}
      </style>
    </div>
  );
}
