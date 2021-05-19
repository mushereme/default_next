import { Row, Col } from "antd"
import MotoDiv from "../MotoSmalls/Div"

export default function Banner (props) {

    const { data } = props

    return (
        <Row>
            {data.map((item, index) => (
                <Col 
                    span={24 / data.length}
                    className="w-full h-48"
                    className=""
                >
                    <div 
                        className={`${index !== 0 && "ml-4"} w-auto h-48 rounded-lg`}
                        style={{
                            backgroundImage: `url(${item.imagemain})`,
                            backgroundSize: "cover", 
                            backgroundRepeat: "no-repeat",
                            objectFit: "cover",
                            height: "100", 
                            width: "auto",
                        }}
                    >
                        <div 
                            style={{
                                background: "linear-gradient(270deg, rgba(0,0,0,0), rgba(0,0,0,1))"
                            }}
                            className="w-full h-full flex items-center rounded-xl"
                        >
                            <div className="p-8 max-w-sm">
                                <MotoDiv 
                                    item={{value: item.title}}
                                    defaultClassName="text-xl font-bold text-white mb-4"
                                />
                                <MotoDiv 
                                    item={{value: "Дэлгэрэнгүй", hyperlink: item.hyperlink}}
                                    defaultClassName="text-black text-xs font-bold mx-2"
                                    defaultButtonClassName="bg-green-400 hover:bg-white border-none"
                                />
                                
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    )
}