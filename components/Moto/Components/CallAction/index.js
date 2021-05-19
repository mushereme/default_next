import MotoIcon from "../MotoSmalls/Icon"

export default function CallAction(props) {

    const { data, defaultClassName } = props

    return (
        <div className="relative z-20" >
            <div className={`absolute ${defaultClassName} -top-${data.length * 20}`}>
                {data.map((item, index) => (
                    <span key={index} onClick={item.onClick} className={`rounded-full bg-green-400 h-10 w-10 mb-4 flex items-center justify-center hover:bg-green-800`}>
                        <MotoIcon type={item.icon} className="text-lg text-white text-center  relative" />
                    </span>
                ))}
            </div>
        </div>
    )
}