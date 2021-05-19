import MotoDiv from "components/Moto/Components/MotoSmalls/Div"
import ProductList from "components/Moto/Components/ProductList"

export default function WidgetProductList() {

    return (
        <div className="my-12">
            <MotoDiv 
                item={{value: "Бүтээгдэхүүн үйлчилгээ"}} 
                defaultStyle={{fontWeight: "800"}}
                defaultClassName="text-lg"
            />
            {/* Column дээр ONCLICK эвент холбов.  */}
            <ProductList data={list_data}  />
        </div>
    )
}

const list_data = [
    {
        title: 'Авто зар',
        icon: 'iconangleright', 
        onClick: () => console.log("Auto zar clicked")
    },
    {
        title: 'Сэлбэг худалдаа',
        icon: 'iconangleright',
        onClick: () => console.log("Selbeg hudaldaa clicked")

    },
    {
        title: 'Авто диллерүүд',
        icon: 'iconangleright',
        onClick: () => console.log("Auto dealleruud clicked")

    },
    {
        title: 'Мэдээ, мэдээлэл',
        icon: 'iconangleright',
        onClick: () => console.log("Medee medeelel clicked")

    },
    
]