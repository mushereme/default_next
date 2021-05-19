

export default function MotoIconSvg(props) {

    const { svg, defaultClassName } = props

    return (
        <img src={svg} className={defaultClassName} alt="..."/>
    )
}