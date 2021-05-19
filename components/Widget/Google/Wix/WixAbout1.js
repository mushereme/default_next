import React from "react";

import {
    Row,
    Col
} from 'antd'
import GoogleDiv2 from "../GoogleSmalls/GoogleDiv2";

export default function WixAbout1f({myWidget}) {

    const { mainConfig, header, rows } = myWidget.widget;

    return rows.map((item, index) => {
        return (
            <Row className="h-full lg:h-screen">
                <Col 
                    sm={{span: 24}}
                    md={{span: 12}}
                    lg={{span: 12}}
                    className="h-full flex align-center"
                >
                    <div className="h-full text-center">
                        <GoogleDiv2
                        item={item.title}
                        defaultStyle={{ fontWeight: "600" }}
                        defaultClassName="mt-5 mb-3 text-lg lg:text-8xl lg:mt-24 "
                        isMarkdown={true}
                        />
                        <GoogleDiv2
                        item={item.desc}
                        defaultClassName="mb-5"
                        isMarkdown={true}
                        />
                    </div>
                </Col>
                <Col 
                    sm={{span: 24}}
                    md={{span: 12}}
                    lg={{span: 12}}
                    className="h-full"
                >
                    <div 
                        className="h-full"
                        style={{
                        backgroundColor: "#fff",
                        backgroundImage: `url(${item?.image?.value || ""})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        width: "100%",
                        minHeight: "350px",
                        height: "100%",
                        ...JSON.parse(item?.image?.note || "{}")
                        }}
                    >
                    </div>
                </Col>
            </Row>
        )
    })
}