import { Row, Col } from "antd"
import AutozarVertical from "../Card/AutozarVertical"


export default function AutozarListHighlight (props) {

    const { data } =  props

    return (
        <Row className="w-full my-4">
            {data.map((item, index) => (
                <Col 
                    key={index} 
                    lg={24 / data.length} 
                    md={8} 
                    sm={12} 
                    xs={12} 
                    onClick={item.onClick}
                >
                    <AutozarVertical
                        index={index}
                        item={item}
                    />
                </Col>
            ))}    
        </Row>
    )
}