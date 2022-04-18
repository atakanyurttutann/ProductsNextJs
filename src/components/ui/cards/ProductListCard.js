import { useDispatch, useSelector } from "react-redux";
import { SET_BASKET, SET_PRODUCT } from "@/redux/types"
import { useRouter } from "next/router";
const ProductListCard = ({ item }) => {
    const { basket } = useSelector(state => state.basket)
    const dispatch = useDispatch();
    const router = useRouter();
    const addBasket = () => {
        const newBasket = basket;
        const find = newBasket.findIndex((q) => q.id == item.id);
        if (find > -1) {
            newBasket[find].count = newBasket[find].count + 1
        } else {
            const data = {
                name: item.name, price: item.price, id: item.id, count: 1
            }
            newBasket.push(data);
        }
        dispatch({ type: SET_BASKET, data: newBasket })
        localStorage.setItem("basket", JSON.stringify(newBasket))

    }
    return (
        <div className=" w-full h-[302px] bg-white">
            <div className="p-2">
                <div className=" cursor-pointer productListCard" onClick={() => {
                    dispatch({ type: SET_PRODUCT, data: item });
                    router.push(`/product/${item.id}`)

                }}>
                    <div className="w-full h-[150px]">
                        <img className="w-full h-full object-cover" alt={item.name} src={item.image} />
                    </div>
                    <div className="text-[#2A59FE] text-[14px] leading-4 mt-[15px] ">{item.price} ₺</div>
                    <div className="text-black text-[14px] leading-4 mt-[15px] "> {item.name}
                    </div>
                </div>

                <div className=" w-full mt-[15px]">
                    <button onClick={addBasket} className=" productsAddCard w-full  justify-center items-center bg-[#2A59FE] text-white py-[8px] rounded-[4px]">Add to Card</button>
                </div>

            </div>
        </div >
    )
}
export default ProductListCard;