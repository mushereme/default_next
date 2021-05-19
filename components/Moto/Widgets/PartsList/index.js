import PartsList from "components/Moto/Components/PartsList"

export default function WidgetPartsList() {

    return (
        <div className="my-6">
            <PartsList data={parts_data}/>            
        </div>
    )
}

const parts_data = [
    {
        title: "Сэлбэг хэрэгсэл",
        amount: "100+",
        defaultType: 0,
        onTypeChange: (value) => console.log("Type changed by: ", value),
        parts: [
            {
                hyperlink: "/selbeg/1",
                title: "2016 Mercedes benz glc300",
                currency: "mnt",
                price: "120000000",
                rate: 3,
                onRateChange: (value) => console.log("Rate clicked with: ", value),
                imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621258452/motocar/newmoto/product-24-1-300x300_1_g1swy8.png"
            },
            {
                hyperlink: "/selbeg/1",
                title: "2016 Mercedes benz glc300",
                currency: "mnt",
                price: "120000000",
                rate: 3,
                onRateChange: (value) => console.log("Rate clicked with: ", value),
                imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621254499/motocar/newmoto/product-17-1-300x300_1_et7xwc.png"
            },
            {
                hyperlink: "/selbeg/1",
                title: "2016 Mercedes benz glc300",
                currency: "mnt",
                price: "120000000",
                rate: 3,
                onRateChange: (value) => console.log("Rate clicked with: ", value),
                imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621254532/motocar/newmoto/product-20-1-300x300_1_atdekn.png"
            },
        ]
    },
    {
        title: "Наклад",
        amount: "100+",
        defaultType: 1,
        onTypeChange: (value) => console.log("Type changed by: ", value),
        parts: [
            {
                hyperlink: "/selbeg/1",
                title: "2016 Mercedes benz glc300",
                currency: "mnt",
                price: "120000000",
                rate: 3,
                onRateChange: (value) => console.log("Rate clicked with: ", value),
                imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621254602/motocar/newmoto/product-21-1-300x300_1_jlxews.png"
            },
            {
                hyperlink: "/selbeg/1",
                title: "2016 Mercedes benz glc300",
                currency: "mnt",
                price: "120000000",
                rate: 3,
                onRateChange: (value) => console.log("Rate clicked with: ", value),
                imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621254619/motocar/newmoto/product-22-1-300x300_1_ccur2b.png"
            },
            {
                hyperlink: "/selbeg/1",
                title: "2016 Mercedes benz glc300",
                currency: "mnt",
                price: "120000000",
                rate: 3,
                onRateChange: (value) => console.log("Rate clicked with: ", value),
                imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621254621/motocar/newmoto/product-23-1-300x300_1_hxdgce.png"
            },
        ]
    },
    {
        title: "Тос тосолгоо ",
        amount: "100+",
        defaultType: 2,
        onTypeChange: (value) => console.log("Type changed by: ", value),
        parts: [
            {
                hyperlink: "/selbeg/1",
                title: "2016 Mercedes benz glc300",
                currency: "mnt",
                price: "120000000",
                rate: 3,
                onRateChange: (value) => console.log("Rate clicked with: ", value),
                imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621254724/motocar/newmoto/castrol-magnatec-oil-500x500_e6kxxe.png"
            },
            {
                hyperlink: "/selbeg/1",
                title: "2016 Mercedes benz glc300",
                currency: "mnt",
                price: "120000000",
                rate: 3,
                onRateChange: (value) => console.log("Rate clicked with: ", value),
                imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621254725/motocar/newmoto/81W5QooJRsL_ij4b2n.png"
            },
            {
                hyperlink: "/selbeg/1",
                title: "2016 Mercedes benz glc300",
                currency: "mnt",
                price: "120000000",
                rate: 3,
                onRateChange: (value) => console.log("Rate clicked with: ", value),
                imagemain: "https://res.cloudinary.com/dzih5nqhg/image/upload/v1621254726/motocar/newmoto/81fOdgetrdL_1_qiqpjh.png"
            },
        ]
    }
]