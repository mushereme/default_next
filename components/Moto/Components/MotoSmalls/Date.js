import moment from "moment"
import "moment/locale/mn"

moment.locale("mn")

export default function MotoDate(props) {

    const { date, defaultClassName } = props

    return (
        <div className={defaultClassName}>
            {moment(date).calendar()}
        </div>
    )    
}