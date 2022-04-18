import { useDispatch, useSelector } from "react-redux";
import { SET_BASKET } from "@/redux/types"
const BasketCard = () => {
    const dispatch = useDispatch();
    const { basket } = useSelector(state => state.basket)

    return (
        <div>
            <div className="text-[#626b8b] hidden lg:block">Cart</div>
            <div className=" shadow-xl h-auto w-full bg-white p-4 mt-2">
                {basket.map((e, index) => (
                    <div key={index} className="flex items-center justify-between mt-2">
                        <div>
                            <div>{e.name}</div>
                            <div className="text-[#2A59FE]">{e.price * e.count}₺</div>
                        </div>
                        <div className="flex">
                            <button data-cy={"decrease"} onClick={() => {
                                const newBasket = [...basket];
                                newBasket[index].count = newBasket[index].count - 1;
                                if (newBasket[index].count === 0) {
                                    newBasket.splice(index, 1)
                                }
                                dispatch({ type: SET_BASKET, data: newBasket })
                                localStorage.setItem("basket", JSON.stringify(newBasket))

                            }} className="text-[#626b8b] bg-[#f3f3f6] w-[25px] h-[25px] flex justify-center items-center font-bold text-[30px]">-</button>
                            <div data-cy={"increase"} className=" w-[25px] h-[25px] flex items-center justify-center bg-[#2a59fe] text-white">{e.count}</div>
                            <button onClick={() => {
                                const newBasket = [...basket];
                                newBasket[index].count = newBasket[index].count + 1;
                                dispatch({ type: SET_BASKET, data: newBasket })
                                localStorage.setItem("basket", JSON.stringify(newBasket))

                            }} className="text-[#626b8b] bg-[#f3f3f6] w-[25px] h-[25px] flex justify-center items-center font-bold text-[30px]">+</button>

                        </div>
                    </div>
                ))}
                {basket.length === 0 && "Basket is empty"}
            </div>
        </div>

    )

}
export default BasketCard;