import Banner01 from "components/Moto/Components/Banner/01"

export default function WidgetBanner () {

    return (
        <div className="my-24">
            <Banner01 data={banner_data}/>    
        </div>
    ) 
}

const banner_data = [
    {
        title: "Жолооч таны анд ШИНГЭН ИНЖЕНЕР",
        hyperlink: "/news/1",
        imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621157149/motocar/newmoto/banner1_bogolk.png"
    },
    {
        title: "ТАНЫ ХЭРЭГЦЭЭГ ТУРШЛАГААРАА МЭДНЭ",
        hyperlink: "/news/2",
        imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621157214/motocar/newmoto/banner2_dl5ojr.png"
    }
]