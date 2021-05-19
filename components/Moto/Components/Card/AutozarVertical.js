import MotoSeen from "components/Moto/Components/MotoSmalls/Seen"
import MotoDiv from "../MotoSmalls/Div"
import MotoIcon from "../MotoSmalls/Icon"
import moment from "moment"
import MotoRate from "components/Moto/Components/MotoSmalls/Rate"

export default function AutozarVertical (props) {

    const { item, index } = props

    return (
        <div className={` ${index !== 0 && "ml-4"} relative`}>
            <div 
                className="h-36 w-auto rounded-xl"
                style={{
                    backgroundImage: `url(${item.imagemain})`,
                    backgroundSize: "cover", 
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                    height: "100", 
                    width: "auto",
                }}
            >
                <div className="flex flex-wrap content-between top-0 w-full h-full">
                    <div className="flex items-center justify-between z-12 w-full p-2">
                        <div className="top-0 left-0 bg-green-400 rounded-xl">
                            { !moment(item.createddate).isBefore(moment().subtract(1, 'days').format()) && (
                                <MotoDiv 
                                    item={{value: "Шинэ"}}
                                    defaultClassName="text-xs px-3 py-1"
                                />
                            )} 
                        </div>
                        <div>
                            <span onClick={item.onFavoriteClick}> 
                                <MotoIcon type="iconangleleft" className="text-red-400 text-lg hover:text-xl hover:text-red-600"/>
                            </span>
                        </div>
                    </div>
                    { item.issold && (
                        <div className="flex items-end justify-end w-full">
                            <img src="https://res.cloudinary.com/dzih5nqhg/image/upload/v1621154786/motocar/newmoto/stamp_3_drdoak.png" className="h-16"/>
                        </div>
                    )}
                </div>
            </div>  
            <div>
                <div className="flex items-center justify-between mt-3">
                    <MotoRate defaultClassName="text-xs" star={item.star} onClick={item.onStarClick} />
                    <MotoSeen defaultClassName="text-xs" seen={item.seen} />
                </div>
                <div className="mt-3 w-full">
                    <MotoDiv 
                        item={{value: item.title}}
                        defaultClassName="font-bold text-xs uppercase truncate w-full"
                    />
                    <div className="flex items-center">
                        <MotoDiv 
                            item={{value: item.currency === "mnt" ? "₮" : "$"}}
                            defaultClassName="font-bold text-lg uppercase mr-1" 
                        />
                        <MotoDiv 
                            item={{value: JSON.parse(item.price).toLocaleString()}}
                            defaultClassName="font-bold text-lg uppercase truncate w-full"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}