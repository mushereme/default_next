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
            <div className="relative bg-white overflow-hidden h-screen" key={index}>
                <div className="max-w-screen mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-5/12 lg:pb-28 xl:pb-32 lg:mt-48">
                        <div className="relative pt-6 px-4 sm:dpx-6 lg:px-8">
                            <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 md:mt-16 lg:px-8 xl:mt-28 ">
                                <div className="sm:text-center lg:text-left border-l-4 border-gray-900 pl-3">
                                    {!isEmpty(item?.title?.value) && <h4 className="text-4xl tracking-tight font-extralight text-grey-900">{item?.title?.value}</h4>}
                                    <div className="lg:block md:block hidden">
                                        {!isEmpty(item?.desc?.value) && <p className="mt-3 text-sm text-grey-500 sm:mt-5">{item?.desc?.value}</p>}
                                        <div className="flex mt-8 items-center">
                                            {!isEmpty(item?.priceTag?.value) && <p className="text-base font-semibold mr-4">{item?.priceTag?.value}</p>}
                                            {isEmpty(item?.price?.value) && <p className="text-2xl font-semibold">{item?.price?.formattedValue}</p>}
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-7/12 border-l-8 border-gray-600">
                    <img 
                        className="lg:h-5/6 sm:h-screen object-cover sm:object-center w-full"
                        src={`${item?.image?.value || ""}`}
                        alt=""
                    />
                </div>
            </div>
        )
    })
}
