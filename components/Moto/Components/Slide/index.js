import { useRef } from "react";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { DEFAULT_SLIDE } from "util/defaults.js"
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    Autoplay,
    A11y,
  } from "swiper";
import "swiper/swiper-bundle.css";

// MOTO
import MotoIcon from "components/Moto/Components/MotoSmalls/Icon"
import MotoDiv from "components/Moto/Components/MotoSmalls/Div"


SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);

export default function WidgetSlide(props) {

    const { data } = props;

    const topButton = "45%";
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const PrevArrow = () => {
        return (
            <div
                className="rounded-full bg-white h-10 w-10"
                style={{
                    position: "absolute",
                    top: topButton,
                    display: "block",
                    lineHeight: "0",
                    left: "25px",
                    zIndex: 12,
                    opacity: 1
                }}
            >
                <div className="flex items-center justify-center content-center">
                    <MotoIcon type="iconangleleft" className="relative pt-1 text-center text-grey-300 text-xl"/>
                </div>
            </div>
        )
    }

    const NextArrow = () => {
        return (
            <div
                className="rounded-full bg-green-300 h-10 w-10"
                style={{
                    position: "absolute",
                    top: topButton,
                    display: "block",
                    lineHeight: "0",
                    right: "25px",
                    zIndex: 12,
                    opacity: 1
                }}
            >
                <div className="flex items-center justify-center content-center">
                    <MotoIcon type="iconangleright" className="relative pt-1 text-center text-white text-xl"/>
                </div>
            </div>
        )
    }

    return (
        <div>
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
                {data.map((item, index) => {
                    return (
                        <SwiperSlide 
                            key={index}
                            style={{height: "400px", width: "auto"}}
                            >
                            <div 
                                className="h-full w-full flex items-center"
                                style={{
                                    backgroundColor: "#fff",
                                    backgroundImage: `url(${item?.image?.value || DEFAULT_SLIDE})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center center",
                                }}
                                >
                                <div className="max-w-screen-xl mx-auto">
                                    <div className="w-screen text-center lg:text-left md:text-left"> 
                                        <MotoDiv 
                                            item={{value: item.title}}
                                            defaultStyle={{fontWeight: "700", transform: "scaleY(1.2)"}}
                                            defaultClassName="max-w-lg lg:text-6xl text-4xl text-white pt-4"
                                            />
                                        <MotoDiv 
                                            item={{value: item.desc}}
                                            defaultStyle={{fontWeight: "700"}}
                                            defaultClassName="max-w-md lg:text-base text-sm leading-5 text-white pt-4"
                                            />
                                        <MotoDiv 
                                            item={{value: "Дэлгэрэнгүй", hyperlink: item.hyperlink}}
                                            defaultStyle={{fontWeight: "700"}}
                                            defaultClassName="text-base text-black px-8"
                                            defaultButtonClassName="mt-4 bg-green-400 hover:bg-white border-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ bottom: "30px" }} className=" swiper-pagination "></div>
                            <div ref={prevRef}>
                                <PrevArrow />
                            </div>
                            <div ref={nextRef}>
                                <NextArrow />
                            </div>
                        </SwiperSlide>
                )})}
            </Swiper>
        </div>
    )
}