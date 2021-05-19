import {
    Row,
    Select,
} from "antd"
import Link from "next/link"
import MotoDiv from "../MotoSmalls/Div"
import MotoRate from "../MotoSmalls/Rate"

const { Option } = Select

export default function PartsCard(props) {

    const { index, data } = props

    return (
        <div className={`${index !== 0 && "ml-4"} h-full`}>
            <div className={`border-b-2 ${ index === 0 ? "border-green-400" : "border-gray-300"} flex items-center justify-between`}>
                <div className="flex items-end">
                    <p className="text-sm font-bold mr-1 text-gray-600">{data.title}</p>
                    <p className="text-xs text-gray-400">/Нийт<span className="font-bold ml-1 text-gray-600">{data.amount}</span>/</p>
                </div>
                <Select className="text-xs w-1/4 text-gray-400" bordered={false} defaultValue={data.defaultType} onChange={data.onTypeChange}>
                    <Option className="w-full" value={2}>Төрөл</Option>
                    <Option className="w-full" value={0}>Шинэ</Option>
                    <Option className="w-full" value={1}>Хуучин</Option>
                </Select>
            </div>
            <div className="pt-4">
                { data.parts.map((item, index) => (
                    <div className="mb-4 rounded-xl bg-gray-100 h-24" key={index}>
                        <a href={item.hyperlink} className="hover:text-green-400">
                            <div className="grid grid-cols-3 gap-3 px-4 flex items-center h-full">
                                <div>
                                    <img src={item.imagemain} className="h-20 w-auto" />
                                </div>
                                <div className="col-span-2">
                                    <MotoDiv 
                                        item={{value: item.title}}
                                        defaultClassName="font-bold text-xs truncate w-full uppercase"
                                    />
                                    <div className="flex items-center text-lg">
                                        <MotoDiv 
                                            item={{value: item.currency === "mnt" ? "₮" : "$"}}
                                            defaultClassName="font-bold mr-1"
                                        />
                                        <MotoDiv 
                                            item={{value: JSON.parse(item.price).toLocaleString()}}
                                            defaultClassName="font-bold uppercase w-full truncate"
                                        />
                                    </div>    
                                    <MotoRate star={item.rate} onClick={item.onRateChange} defaultClassName="text-sm"/>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}