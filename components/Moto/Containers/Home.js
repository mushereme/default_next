import Hero from "components/Moto/Widgets/Hero"
import ProductList from "components/Moto/Widgets/ProductList/index"
import HighlightAutozarList from "components/Moto/Widgets/AutozarList/Highlight"
import Banner from "components/Moto/Widgets/Banner"
import PartsList from "components/Moto/Widgets/PartsList"
import NewsListHighlight from "components/Moto/Widgets/NewsList/Highlight"

export default function Home() {

    return (
        <div>
            <Hero />
            <div className="max-w-screen-xl mx-auto">
                <ProductList />
                <HighlightAutozarList />
                <Banner/>
                <PartsList />
                <NewsListHighlight />
            </div>
        </div>
    )
}

