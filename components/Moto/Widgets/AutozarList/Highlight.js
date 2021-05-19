import MotoDiv from "components/Moto/Components/MotoSmalls/Div"
import AutozarListHighlight from "components/Moto/Components/AutozarList/Highlight"

export default function WidgetAutozarList () {

    return (
        <div className="my-12">
            <MotoDiv 
                item={{value: "Шинэ авто зар"}} 
                defaultStyle={{fontWeight: "800"}}
                defaultClassName="text-lg"
            />
            <AutozarListHighlight
                data={autozar_data}
            />
        </div>
    )
}

const autozar_data = [
    {
        imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621149297/motocar/newmoto/flying-b_1-876x535_2_qlvpc6.jpg",
        title: "2016 Mercedes benz glc300",
        isactive: true,
        isnew: true,
        issold: true,
        star: 1.5,
        seen: 1000,
        price: 120000000,
        currency: "mnt",
        isfavorite: true,
        createddate: "2022-05-15 17:23:15",
        onFavoriteClick: () => console.log('Favorite clicked'),
        onStarClick: (star) => console.log("Star clicked with: ", star)
    },
    {
        imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621149762/motocar/newmoto/ogrmq6cdr5w2betlmmou_1_klzz1c.jpg",
        title: "2016 Mercedes benz glc300 2016 Mercedes benz glc300",
        isactive: true,
        isnew: true,
        issold: false,
        star: 4,
        seen: 1000,
        price: 120000000,
        currency: "mnt",
        isfavorite: false,
        createddate: "2021-05-16 17:23:15"
    },
    {
        imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621149864/motocar/newmoto/awffabviubxil5dupdag_1_zcsw48.jpg",
        title: "2016 Mercedes benz glc300",
        isactive: true,
        issold: false,
        isnew: true,
        star: 3.5,
        seen: 1000,
        price: 120000000,
        currency: "mnt",
        isfavorite: false,
        createddate: "2021-05-14 17:23:15"
    },
    {
        imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621149871/motocar/newmoto/bncsi6crnrbkhk7m9h8g_1_axdmpg.jpg",
        title: "2016 Mercedes benz glc300",
        isactive: true,
        isnew: true,
        issold: false,
        star: 1.5,
        seen: 1000,
        price: 120000000,
        currency: "mnt",
        isfavorite: true,
        createddate: "2021-05-13 17:23:15"
    },
    {
        imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621149880/motocar/newmoto/zd2qmwdtfah4ty5asacw_1_o5yqk7.png",
        title: "2016 Mercedes benz glc300",
        isactive: true,
        isnew: true,
        issold: false,
        star: 4,
        seen: 1000,
        price: 120000000,
        currency: "mnt",
        isfavorite: false,
        createddate: "2021-05-15 17:23:15"
    },
    {
        imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621149886/motocar/newmoto/ogrmq6cdr5w2betlmmou_1_iypnah.png",
        title: "2016 Mercedes benz glc300",
        isactive: true,
        issold: false,
        isnew: true,
        star: 3.5,
        seen: 1000,
        price: 120000000,
        currency: "mnt",
        isfavorite: false,
        createddate: "2021-05-15 13:23:15"
    }
]