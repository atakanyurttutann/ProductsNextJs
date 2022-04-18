import { useDispatch, useSelector } from "react-redux";
import { SET_FILTER } from "@/redux/types";
import { useRouter } from "next/router";
const SerachInput = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { productsFilter } = useSelector(state => state.products)
    return (
        <div className=" relative">
            <form onSubmit={(e) => {
                e.preventDefault()
                const newProductsFilter = { ...productsFilter }
                delete newProductsFilter.brand
                const value = e.target.search.value;
                newProductsFilter.name = value;

                dispatch({ type: SET_FILTER, data: newProductsFilter });
                router.push("/")
            }}>
                <input name="search" defaultValue={productsFilter.search} className="w-full py-[8px] text-[16px] text-black pl-[40px] pr-[8px] placeholder:text-gray-600 placeholder:text-[16px] rounded" placeholder="Serach" />

            </form>
            <div className=" absolute top-0 left-2 flex justify-center items-center h-full">
                <i className="fas fa-search  text-[16px] text-gray-600 "></i>
            </div>
        </div>

    )
}

export default SerachInput