import React, { useState } from "react";

import { Row, Col, Popover } from "antd";
import { isEmpty } from "lodash";
import ReactMarkdown from "react-markdown";
import GoogleDiv from "components/Widget/Google/GoogleSmalls/GoogleDiv";

export default function WidgetHero3({ myWidget }) {
  const { mainConfig, header, rows } = myWidget.widget;
  const [video, setVideo] = useState(false);

  const onToggleVideo = () => {
    setVideo(!video);
  };

  // console.log("AM I HERE WITH: ", rows)
  // !isEmpty(item?.title?.value)
  // !isEmpty(item?.desc?.value)
  // ${item?.image?.value || ""}
  // ...JSON.parse(item?.image?.note || "{}")
  return rows.map((item, index) => {
    return (
      <div className="relative h-96" key={index}>
        {!isEmpty(item?.embedUrl?.value) && !video && (
          <div className="relative mr-auto sm:px-6 justify-center z-10 h-full hidden lg:flex items-center">
            <a onClick={() => onToggleVideo()} className="">
              {item?.embedUrlText?.value}
            </a>
          </div>
        )}
        {!video && (
          <div className="relative ml-auto sm:px-6 lg:w-6/12 z-10 h-96 flex items-center">
            <main className="mr-auto max-w-7xl">
              <div className="sm:text-center lg:text-left">
                {!isEmpty(item?.title?.value) && (
                  <p className="lg:text-4xl text-md tracking-tight font-semibold">
                    {item?.title?.value}
                  </p>
                )}
                <div className="lg:block md:block hidden">
                  {!isEmpty(item?.desc?.value) && (
                    <p className="mt-3 text-sm sm:mt-5">{item?.desc?.value}</p>
                  )}
                  <div className="flex mt-8 items-center">
                    {!isEmpty(item?.priceTag?.value) && (
                      <p className="text-base font-semibold mr-4">
                        {item?.priceTag?.value}
                      </p>
                    )}
                    {isEmpty(item?.price?.value) && (
                      <p className="text-2xl font-semibold">
                        {item?.price?.formattedValue}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </main>
          </div>
        )}
        <div className="absolute inset-0 lg:left-0">
          {!video ? (
            <div
              className="h-96 object-cover sm:object-center w-full"
              alt=""
              style={{
                backgroundColor: "#fff",
                backgroundImage: `url(${item?.image?.value || ""})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          ) : (
            <div className="h-96 object-cover sm:object-center w-full" alt="">
              <iframe
                className="w-full h-full"
                src={`${item?.embedUrl?.value + "?autoplay=1&rel=0" || ""}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    );
  });
}
