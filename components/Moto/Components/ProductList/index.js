import {
    Col,
    Row,
} from "antd"
import { useState } from "react"
import WidgetProductCard from "components/Moto/Components/Card/Product"


export default function WidgetProductList (props) {

    const [ selected, setSelected ] = useState(0)
    const { data } = props

    const onSelectedClick = (selected) => {
        setSelected(selected)
    }

    return (
        <Row className="w-full my-4">
            {data.map((item, index) => (
                <Col key={index} span={24 / data.length} className="w-64 h-64" onClick={item.onClick}>
                    <WidgetProductCard index={index} length={data.length} item={item} selected={selected} onSelectedClick={onSelectedClick} />
                </Col>
            ))}          
        </Row>
    )
}