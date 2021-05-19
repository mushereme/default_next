import React, { useRef, useState, useEffect } from "react";
import { Button } from "antd";
import { callData } from "lib/googleSheetFunction";
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

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);

const WidgetSlider2Data = [
  {
    image:
      "https://res.cloudinary.com/mungundent/image/upload/v1616744481/slide/mungundent_address_01_bfr2mc.jpg",
    title: "",
    desc: "",
  },
  {
    image:
      "https://res.cloudinary.com/mungundent/image/upload/v1616746792/slide/mungundent_address_02_zhiqav.jpg",
    title: "King Tower 125 байранд байрлаж байна.",
    desc: "King Tower-т ирснээр олоход амархан байх болно.",
  },
];

const WidgetSlider2 = ({ doc, sheetName }) => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    callData(doc, sheetName, setMyData);
  }, [doc]);

  // console.log("myData", myData);

  const topButton = "200px";
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
        <Button
          type="primary"
          shape="circle"
          icon={<MyIcon type="iconangleleft" />}
          className="gx-m-0 gx-btn-white"
        />
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
        <Button
          type="primary"
          shape="circle"
          icon={<MyIcon type="iconangleright" />}
          className="gx-m-0 gx-btn-white"
        />
      </div>
    );
  };

  return (
    <>
      <div className="gx-mt-5">
        <Swiper
          className="moto-filter-swiper"
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
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {myData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <img
                  src={item.image.value}
                  style={{
                    ...JSON.parse(item?.image?.note || "{}"),
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    zIndex: "15",
                    top: "0",
                    left: "50px",
                    color: "#fff",
                  }}
                >
                  <div
                    className=" gx-font-weight-bold"
                    style={{
                      width: "50%",
                      fontSize: "2rem",
                      textAlign: "left",
                      lineHeight: "1.3",
                      margin: "5% 0 0 5%",
                      ...JSON.parse(item.title.note || "{}"),
                    }}
                  >
                    {item.title.value}
                  </div>
                  <div
                    className=" gx-font-weight-bold"
                    style={{
                      width: "40%",
                      fontSize: "1rem",
                      textAlign: "left",
                      lineHeight: "1.3",
                      margin: "3% 0 0 5%",
                      ...JSON.parse(item?.desc?.note || "{}"),
                    }}
                  >
                    {item?.desc?.value}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div style={{ bottom: "30px" }} className="swiper-pagination"></div>

          <div ref={prevRef}>
            <SamplePrevArrow />
          </div>
          <div ref={nextRef}>
            <SampleNextArrow />
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default WidgetSlider2;
