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
import GoogleCloudinaryImage from "components/Widget/Google/GoogleSmalls/GoogleCloudinaryImage";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);

export default function WidgetImages2({ myWidget }) {
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
      <Swiper
        className="relative"
        slidesPerView={5}
        spaceBetween={50}
        centeredSlides={false}
        centeredSlidesBounds={false}
        preloadImages={true}
        effect="fade"
        loop={true}
        // pagination={{
        //   el: ".swiper-pagination",
        //   type: "bullets",
        //   clickable: true,
        // }}
        pagination={false}
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
          if (isEmpty(item?.image?.value)) return null;
          return (
            // <SwiperSlide style={{ height: "550px", width: "auto" }} key={index}>
            <SwiperSlide key={index}>
              <div className="container mx-auto">
                <GoogleCloudinaryImage image={item?.image} />
              </div>
            </SwiperSlide>
          );
        })}

        {/* <div style={{ bottom: "10px" }} className="swiper-pagination"></div> */}
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
