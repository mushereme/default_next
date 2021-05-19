import Slide from "components/Moto/Components/Slide"
import Status from "components/Moto/Components/Status"
import CallAction from "components/Moto/Components/CallAction"

export default function WidgetHero() {

    return (
        <div>
            <Slide data={slide_data} />
            <div className="max-w-screen-xl mx-auto pb-16">
                <Status data={stat_data} />
                <CallAction data={action_data} defaultClassName="right-0"/>
            </div>
        </div>
    )
}

const slide_data = [
    {
        hyperlink: "/company/5",
        cover: "https://s3-alpha-sig.figma.com/img/9518/7cbc/b2f6da3a25e379eb15e74e82a04cf38d?Expires=1621814400&Signature=FMTIeroiMhicV7EMSgvTWws43Up3Jnm2MBn7lTOBAH8JaLEvnezvJgN2wG64n0O5z3NZZbMoojNKvHMuJsQCIeudAKyfQbSipaNFVJb8nGlZBXFjAFOfykbn6UfOGZe-RqUB3iI-htlIIRceT14zv5TM8JmQsvO3IMcVoaGJwoy-pkXszcUU~~k7G9OT1Fbc~bggiIdedCtIPTKoe1kQM8IbCOyeVf9VqJrtLzOj2lcFgPAVwvRGcPtwsp4KMLffC8jJinhWaGAjwkFEopfmA04DKYgXcqtLFWBNgckkiYblyPOyBvTVKCVsOuKeSiVAKfQ35DqXxTTJKEyCsII7Uw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        title: "Land Criuser 200",
        desc: "Таван богд ХХК нь 1995.05-р сард байгуулагдсан ба 2013.03 сараас эхлэн шинэ Toyota автомашин борлуулалтын үйл ажиллагааг эхэлсэн.",
    },
    {
        hyperlink: "/company/5",
        cover: "https://s3-alpha-sig.figma.com/img/9518/7cbc/b2f6da3a25e379eb15e74e82a04cf38d?Expires=1621814400&Signature=FMTIeroiMhicV7EMSgvTWws43Up3Jnm2MBn7lTOBAH8JaLEvnezvJgN2wG64n0O5z3NZZbMoojNKvHMuJsQCIeudAKyfQbSipaNFVJb8nGlZBXFjAFOfykbn6UfOGZe-RqUB3iI-htlIIRceT14zv5TM8JmQsvO3IMcVoaGJwoy-pkXszcUU~~k7G9OT1Fbc~bggiIdedCtIPTKoe1kQM8IbCOyeVf9VqJrtLzOj2lcFgPAVwvRGcPtwsp4KMLffC8jJinhWaGAjwkFEopfmA04DKYgXcqtLFWBNgckkiYblyPOyBvTVKCVsOuKeSiVAKfQ35DqXxTTJKEyCsII7Uw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        title: "Land Criuser 200",
        desc: "Таван богд ХХК нь 1995.05-р сард байгуулагдсан ба 2013.03 сараас эхлэн шинэ Toyota автомашин борлуулалтын үйл ажиллагааг эхэлсэн.",
    },
    {
        hyperlink: "/company/5",
        cover: "https://s3-alpha-sig.figma.com/img/9518/7cbc/b2f6da3a25e379eb15e74e82a04cf38d?Expires=1621814400&Signature=FMTIeroiMhicV7EMSgvTWws43Up3Jnm2MBn7lTOBAH8JaLEvnezvJgN2wG64n0O5z3NZZbMoojNKvHMuJsQCIeudAKyfQbSipaNFVJb8nGlZBXFjAFOfykbn6UfOGZe-RqUB3iI-htlIIRceT14zv5TM8JmQsvO3IMcVoaGJwoy-pkXszcUU~~k7G9OT1Fbc~bggiIdedCtIPTKoe1kQM8IbCOyeVf9VqJrtLzOj2lcFgPAVwvRGcPtwsp4KMLffC8jJinhWaGAjwkFEopfmA04DKYgXcqtLFWBNgckkiYblyPOyBvTVKCVsOuKeSiVAKfQ35DqXxTTJKEyCsII7Uw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        title: "Land Criuser 200",
        desc: "Таван богд ХХК нь 1995.05-р сард байгуулагдсан ба 2013.03 сараас эхлэн шинэ Toyota автомашин борлуулалтын үйл ажиллагааг эхэлсэн.",
    }
] 

const stat_data = [
    {
        title: "Мото гишүүд",
        value: "100000",
    },
    {
        title: "Нийт авто зар",
        value: "300000"
    },
    {
        title: "Сэлбэг хэрэгсэл",
        value: "298",
    },
    {
        title: "Өдрийн хандалт",
        value: "35000"
    }
]

const action_data = [
    {
        icon: "iconangleleft",
        onClick: () => console.log('Viber button clicked')
    },
    {
        icon: "iconangleleft",
        onClick: () => console.log('WeChat button clicked')
    }
]