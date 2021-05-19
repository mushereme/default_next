import { Col, Row } from "antd"
import MotoDiv from "components/Moto/Components/MotoSmalls/Div"


export default function WidgetStat(props) {

    const { data } = props

    return (
        <div className="relative">
            <div className="absolute -top-12 z-10 w-full h-full">
                <div className="bg-black bg-opacity-90 z-10 rounded ">
                    <Row>
                        {data.map((item, index) => (
                            <Col 
                                key={index} 
                                xs={{span: 24 / (data.length)}}
                                sm={{span: 24 / (data.length)}}
                                md={{span: 24 / (data.length)}}
                                lg={{span: 24 / (data.length)}}
                                className="mx-auto w-full py-4"
                            >
                                <div className="text-center">   
                                    <MotoDiv
                                        item={{value: item.value}}
                                        defaultStyle={{fontWeight: "450"}}
                                        defaultClassName="text-xl lg:text-3xl text-green-400"
                                    />
                                    <MotoDiv 
                                        item={{value: item.title}}
                                        defaultStyle={{fontWeight: ""}}
                                        defaultClassName="text-xs lg:uppercase lowercase mt-1 text-white"
                                    />
                                </div>
                                {index !== 0 && <div className="bg-white h-14 absolute top-4 bg-opacity-30" style={{width: "1px"}}></div> }
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    )
}