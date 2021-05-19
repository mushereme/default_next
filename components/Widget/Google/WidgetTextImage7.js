import React from "react";

import { 
    Row,
    Col,
    Popover
} from "antd";
import { isEmpty } from "lodash";
import ReactMarkdown from "react-markdown";
import GoogleDiv from "components/Widget/Google/GoogleSmalls/GoogleDiv";

export default function WidgetHero3({myWidget}) {

    const { mainConfig, header, rows } = myWidget.widget;

    // console.log("AM I HERE WITH: ", rows)
    // !isEmpty(item?.title?.value)
    // !isEmpty(item?.desc?.value) 
    // ${item?.image?.value || ""} 
    // ...JSON.parse(item?.image?.note || "{}")
    return rows.map((item, index) => {
        return (
            <div className="relative lg:h-screen h-96" key={index}>
                <div className="relative z-10 w-full flex items-top justify-center"  >
                    <div className="text-center mt-16 w-8/12">
                        {!isEmpty(item?.title?.value) && <p className="lg:text-4xl text-md tracking-tight font-semibold">{item?.title?.value}</p>}
                        <div className="lg:block md:block hidden">
                            {!isEmpty(item?.desc?.value) && <p className="mt-3 text-sm sm:mt-5">{item?.desc?.value}</p>}
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 lg:left-0">
                    <div 
                        className="h-full object-center w-full"
                        alt=""
                        style={{
                            backgroundColor: "#fff",
                            backgroundImage: `url(${item?.image?.value || ""})`,
                            backgroundRepeat: "no-repeat",
                            position: 'center center',
                            backgroundSize: "cover",
                        }}
                    />
                </div>
            </div>
        )
    })
}
