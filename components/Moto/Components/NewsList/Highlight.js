import { Col, Row } from "antd"
import NewsVertical from "components/Moto/Components/Card/NewsVertical"

export default function NewsListHighlight(props) {

    const { data } = props

    return (
        <Row className="w-full my-4">
            {data.map((item, index) => (
                <Col
                    key={index}
                    lg={24 / data.length}
                    md={6}
                    sm={12}
                    xs={24}
                >
                    <NewsVertical
                        index={index}
                        data={item}
                    />
                </Col>
            ))}
            
        </Row>
    )
}