import {
    Col
} from "antd"
import MotoIcon from "../MotoSmalls/Icon"
import MotoDiv from "../MotoSmalls/Div"

export default function ProductCard(props) {

    const { index, item, selected, onSelectedClick } = props

    return (
        <span onClick={() => onSelectedClick(index)} className={`${index !== 0 && "ml-4"} h-full border ${selected === index ? "border-green-400" : "border-grey-400"} rounded-xl flex items-center justify-center`}>
            <div className="text-center">
                <MotoIcon type={item.icon} className={`text-5xl ${selected === index ? "text-green-400" : "text-gray-400"}`}/>
                <MotoDiv 
                    item={{value: item.title}}
                    defaultClassName={`${selected === index && "font-bold"} text-gray-600 mt-4`}
                />
            </div>
        </span>
    )
} 