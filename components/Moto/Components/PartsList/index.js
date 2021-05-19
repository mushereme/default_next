import {
    Select,
    Col,
    Row
} from "antd"
import PartsCard from "components/Moto/Components/Card/Parts"

export default function PartsList(props) {

    const { data } = props

    return (
        <div>
            <Row>
                {data.map((item, index) => (
                    <Col 
                        key={index}
                        xs={{span: 24}}
                        sm={{span: 12}}
                        md={{span: 24 / data.length}}
                        lg={{span: 24 / data.length}}
                    >
                        <PartsCard data={item} index={index} />
                    </Col>  
                ))}
            </Row>
        </div>
    )
}