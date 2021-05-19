import MotoIcon from "./Icon"
import MotoDiv from "./Div"

export default function MotoSeen (props ) {

    const { seen, defaultClassName } = props

    return (
        <div className="flex items-center">
            <MotoIcon type="iconangleleft" className={`${defaultClassName} text-gray-600`} />
            <MotoDiv 
                item={{value: seen.toLocaleString()}}
                defaultClassName={`${defaultClassName} font-bold ml-1 uppercase text-gray-400`}
            />
        </div>
    )
}