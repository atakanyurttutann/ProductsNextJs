import { SortByCard, BrandsCard, ModelsCard, ProductListCard, BasketFullCard } from "@/ui/cards/index"
import { ProductsPaginate } from "@/ui/paginate/index"
import { useEffect, useState } from "react";
import { getProductsAction, getModelAndBrandAction } from "@/redux/actions/producsAction"
import { useDispatch, useSelector } from "react-redux";

const HomeView = () => {
    const dispatch = useDispatch();
    const { products, productsFilter } = useSelector(state => state.products)
    useEffect(() => {
        dispatch(getProductsAction(productsFilter))
    }, [dispatch, productsFilter])
    useEffect(() => {
        dispatch(getModelAndBrandAction())
    }, [dispatch])

    const [filterOpen, setFilterOpen] = useState(false);
    return (
        <div >
            <div className="container">
                <div className=" grid grid-cols-12 lg:mt-5 mt-1 lg:gap-10">
                    <div className={`lg:col-span-3 w-full lg:relative fixed lg:left-[0]  transition-all lg:bg-transparent bg-white  lg:overflow-hidden overflow-y-auto top-0 px-4 lg:px-0 lg:h-auto h-full ${filterOpen ? "left-[0]" : "left-[-100%]"}`}>
                        <div className="lg:hidden py-4 border-b  text-gray-600 border-gray-600 border-opacity-20 text-xl flex justify-between items-center">
                            <div>Filter</div>
                            <button data-cy={"filterClose"} onClick={() => {
                                document.getElementsByTagName("body")[0].classList.remove("overflow-hidden")
                                setFilterOpen(false)
                            }} className="h-6 w-6 text-gray-600 bg-opacity-20 rounded shadow-2xl  bg-gray-200">X</button>
                        </div>

                        <div>
                            <SortByCard />
                        </div>
                        <div className="mt-2">
                            <BrandsCard />
                        </div>
                        <div className="mt-2">
                            <ModelsCard />
                        </div>
                    </div>
                    <div className=" lg:hidden col-span-12">
                        <button data-cy={"filterOpen"} onClick={() => {
                            setFilterOpen(true);
                            document.getElementsByTagName("body")[0].classList.add("overflow-hidden")
                        }} className=" mt-2 w-full  justify-center items-center bg-[#2A59FE] text-white py-[8px] rounded-[4px]">Filter</button>

                    </div>
                    <div className="lg:col-span-6 col-span-12 lg:mt-8 mt-3">
                        <div className=" grid grid-cols-12 gap-4">
                            {products.map((e, index) => (
                                <div className=" lg:col-span-4 col-span-6" key={index}>
                                    <ProductListCard item={e} />
                                </div>
                            ))}

                        </div>
                        {products.length == 0 ? <div> Sonuç Bulunamadı</div> :
                            <ProductsPaginate />
                        }
                    </div>
                    <div className="lg:col-span-3  lg:block ">
                        <BasketFullCard />
                    </div>

                </div>
            </div>
        </div>


    )
}
export default HomeView;