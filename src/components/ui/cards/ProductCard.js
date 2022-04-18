import { useDispatch, useSelector } from "react-redux";
import { SET_BASKET } from "@/redux/types"
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getProductAction } from "@/redux/actions/producsAction"
const ProductCard = () => {
    const router = useRouter();
    const id = router.query.id
    const { basket } = useSelector(state => state.basket)
    const { product } = useSelector(state => state.products)

    const dispatch = useDispatch();
    const addBasket = () => {
        const newBasket = basket;
        const find = newBasket.findIndex((q) => q.id == id);
        if (find > -1) {
            newBasket[find].count = newBasket[find].count + 1
        } else {
            const data = {
                name: product.name, price: product.price, id: id, count: 1
            }
            newBasket.push(data);
        }
        dispatch({ type: SET_BASKET, data: newBasket })
        localStorage.setItem("basket", JSON.stringify(newBasket))

    }
    useEffect(() => {
        if (product.id == id) {
        } else {
            dispatch(getProductAction(id))
        }
    }, [dispatch, id, product.id])

    return (
        <div>
            {product.id ? <div className=" grid lg:grid-cols-2 grid-cols-1 p-4 shadow-xl gap-8 bg-white">

                <div className="w-full h-[400px] ">
                    <img className="w-full h-full object-cover" src={product.image} />
                </div>
                <div className=" w-full">
                    <h1 className="text-2xl">{product.name}</h1>
                    <div className="text-[#2A59FE] text-xl mt-2">{product.price}₺</div>
                    <div data-cy={"productAddBasket"} className="lg:mt-8 mt-5">
                        <button onClick={addBasket} className=" mt-2 w-full  justify-center items-center bg-[#2A59FE] text-white py-[8px] rounded-[4px] font-bold">Add to Cart</button>
                    </div>
                    <div className="mt-5">
                        {product.description}                </div>
                </div>
            </div> : "Not Found"}
        </div>
    )
}



export default ProductCard
