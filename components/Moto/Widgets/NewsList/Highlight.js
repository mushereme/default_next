import MotoDiv from "components/Moto/Components/MotoSmalls/Div";
import NewsListHighlight from "components/Moto/Components/NewsList/Highlight"

export default function WidgetNewsList() {


    return (
        <div className="my-12">
            <MotoDiv 
                item={{value: "Шинэ нийтлэл"}}
                defaultClassName="font-bold text-lg"
            />
            <NewsListHighlight data={newslist_data}/>
        </div>
    )
}

const newslist_data = [
    {
        id: 1,
        imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621149297/motocar/newmoto/flying-b_1-876x535_2_qlvpc6.jpg",
        title: "8 сард Японы автомашин үйлдвэрлэл 8.8 хувиар буурчээ.",
        createddate: "2021-05-18",
        sharecount: "975",
        seencount: "800"
    },
    {
        id: 1,
        imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621149297/motocar/newmoto/flying-b_1-876x535_2_qlvpc6.jpg",
        title: "8 сард Японы автомашин үйлдвэрлэл 8.8 хувиар буурчээ.",
        createddate: "2021-05-18",
        sharecount: "975",
        seencount: "800"
    },
    {
        id: 1,
        imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621149297/motocar/newmoto/flying-b_1-876x535_2_qlvpc6.jpg",
        title: "8 сард Японы автомашин үйлдвэрлэл 8.8 хувиар буурчээ.",
        createddate: "2021-05-18",
        sharecount: "975",
        seencount: "800"
    },
    {
        id: 1,
        imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621149297/motocar/newmoto/flying-b_1-876x535_2_qlvpc6.jpg",
        title: "8 сард Японы автомашин үйлдвэрлэл 8.8 хувиар буурчээ.",
        createddate: "2021-05-18",
        sharecount: "975",
        seencount: "800"
    }
]