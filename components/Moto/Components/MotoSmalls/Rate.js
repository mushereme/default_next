import { Rate } from "antd"


export default function MotoRate (props) {

    const { star, onClick, defaultClassName } = props

    return (
        <Rate allowHalf onChange={onClick} className={defaultClassName} defaultValue={star}/>    
    )
}