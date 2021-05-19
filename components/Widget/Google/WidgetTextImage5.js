import React from "react";

import { 
    Row,
    Col,
    Popover
} from "antd";
import { isEmpty } from "lodash";
import ReactMarkdown from "react-markdown";
import GoogleDiv from "components/Widget/Google/GoogleSmalls/GoogleDiv";

export default function WidgetHero2({myWidget}) {

    const { mainConfig, header, rows } = myWidget.widget;

    // console.log("AM I HERE WITH: ", rows)
    // !isEmpty(item?.title?.value)
    // !isEmpty(item?.desc?.value) 
    // ${item?.image?.value || ""}
    // ...JSON.parse(item?.image?.note || "{}")
    return rows.map((item, index) => {
        return (
            <div className="relative relative h-screen" key={index}>
                <div className="relative ml-auto sm:px-6 lg:w-5/12 z-10 h-screen bg-white flex items-center">
                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                        <main className="mr-auto max-w-7xl px-4 sm:px-6 md:mt-16 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                {!isEmpty(item?.title?.value) && (
                                    <div className="border-l-4 border-gray-900 pl-3">
                                        <h4 className="text-4xl tracking-tight font-extralight text-grey-900">{item?.title?.value}</h4>
                                    </div>
                                )}
                                <div className="lg:block md:block hidden">
                                    {!isEmpty(item?.desc?.value) && <GoogleDiv item={item.desc} defaultClassName="text-grey-500 sm:mt-5"><ReactMarkdown>{item?.desc?.value}</ReactMarkdown></GoogleDiv>}
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-6/12">
                    <div
                        style={{
                            backgroundColor: "#fff",
                            backgroundImage: `url(${item?.image?.value || ""})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center bottom",
                            width: "100%",
                            minHeight: "350px",
                            height: "100%",
                            ...JSON.parse(item?.image?.note || "{}"),
                            }}
                        />
                    </div>
            </div>
        )
    })
}
