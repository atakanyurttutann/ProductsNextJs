import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_FILTER } from "@/redux/types"

const ModelsCard = () => {
    const dispatch = useDispatch();
    const { productsFilter, models } = useSelector(state => state.products)
    const [modelsData, setModelsData] = useState(models)
    useEffect(() => {
        setModelsData(models)
    }, [models])
    const serach = (e) => {
        const value = e.target.value.toUpperCase();
        let newModels = []
        models.map((e) => {
            if (e.toUpperCase().indexOf(value) > -1) {
                newModels.push(e);
            }
        })
        setModelsData(newModels)
    }
    return (
        <div>
            <div className=" text-[#333333] font-[500] mb-2">Models</div>
            <div className=" w-full h-auto shadow-custom p-4 bg-white">
                <div className=" relative w-full ">
                    <input onChange={serach} type={"text"} className="bg-[#fafafb] w-full p-2 pl-8 focus:outline-none placeholder:text-[#868da5] border-none" placeholder="Serach" />
                    <div className=" absolute top-0 left-2 flex justify-center items-center h-full">
                        <i className="fas fa-search  text-[16px] text-[#868da5] "></i>
                    </div>
                </div>
                <div className="overflow-auto h-[120px] w-full mt-2 ">
                    {modelsData.map((e, index) => (
                        <div className="flex items-center" key={index}>
                            <input onChange={(e) => {
                                const { checked } = e.target
                                const newProductsFilter = { ...productsFilter }
                                if (checked) {
                                    delete newProductsFilter.name;
                                    delete newProductsFilter.brand;
                                    newProductsFilter.model = e.target.value;
                                    dispatch({ type: SET_FILTER, data: newProductsFilter })
                                } else {
                                    delete newProductsFilter.model;
                                    dispatch({ type: SET_FILTER, data: newProductsFilter })

                                }

                            }} className="h-5 w-5 mr-2 border-2  border-blue-600 rounded-md focus:ring-0" type="checkbox" value={e} />
                            <label className="form-check-label inline-block text-gray-800 text-[20px]" >
                                {e}
                            </label>
                        </div>
                    ))}
                </div>



            </div>

        </div>
    )
}
export default ModelsCard;