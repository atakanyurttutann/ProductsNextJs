import Header from "@/composite/Header"
import { ProductView } from "@/components/view/index"

const ProductPage = () => {

    return (
        <div>
            <Header />
            <div className="container lg:mt-10 mt-2">
                <ProductView />
            </div>
        </div>

    )

}
export default ProductPage;