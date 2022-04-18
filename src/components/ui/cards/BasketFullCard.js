import { BasketCard, CheckoutCard } from "@/ui/cards/index"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_TOTAL_PRICE } from "@/redux/types"
function BasketFullCard() {
    const { basket } = useSelector(state => state.basket);
    const dispatch = useDispatch();
    const basketClose = () => {
        document.getElementById("basketCard").classList.add("right-[-100%]")
        document.getElementById("basketCard").classList.remove("right-[0]");
        document.getElementsByTagName("body")[0].classList.remove("overflow-hidden")
    }
    useEffect(() => {
        let total = 0;
        basket.map((e) => {
            total = total + (e.price * e.count);
        })
        dispatch({ type: SET_TOTAL_PRICE, data: total })
    }, [basket, dispatch])
    return (
        <div id="basketCard" className={`lg:w-full   lg:relative fixed  transition-all lg:bg-transparent bg-white w-[75%] lg:overflow-hidden  overflow-y-auto top-0 px-4 lg:px-0 lg:h-auto h-full  lg:right-0 right-[-100%] `}>
            <div className="lg:hidden py-4 border-b  text-gray-600 border-gray-600 border-opacity-20 text-xl flex justify-between items-center">
                <div>Cart</div>
                <button data-cy={"basketClose"} onClick={basketClose} className="h-6 w-6 text-gray-600 bg-opacity-20 rounded shadow-2xl  bg-gray-200">X</button>
            </div>
            <BasketCard />
            <CheckoutCard />
        </div>
    )
}

export default BasketFullCard;