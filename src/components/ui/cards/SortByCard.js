import { sortByData } from "@/data/data"
import { useDispatch, useSelector } from "react-redux";
import { SET_FILTER } from "@/redux/types";

const SortByCard = () => {
    const { productsFilter } = useSelector(state => state.products);
    const dispatch = useDispatch();
    return (
        <div>
            <div className=" text-[#333333] font-[500] mb-2">Sort By</div>
            <div className=" w-full h-[158px] shadow-custom p-4 overflow-auto bg-white">
                {sortByData.map((e, index) => (
                    <div className="flex items-center" key={index}>
                        <input onChange={() => {
                            dispatch({ type: SET_FILTER, data: { ...productsFilter, sortBy: e.filter.sortBy, order: e.filter.order } })
                        }} type="radio" id={e.id} className=" mr-2  h-5 w-5 bg-white  border-[#2a59fe] border-2  text-[#2a59fe] focus:ring-0" name={e.name} defaultChecked={index == 0 ? true : false} />
                        <label className="text-[20px] text-gray-600" htmlFor={e.id} >{e.title}</label>

                    </div>
                ))}


            </div>

        </div>
    )
}
export default SortByCard;