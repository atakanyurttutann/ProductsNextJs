import { SerachInput } from "@/ui/input/index"
import { useEffect } from "react"
import { SET_BASKET } from "@/redux/types"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"

const Header = () => {
    const dispatch = useDispatch();
    const { totalPrice } = useSelector(state => state.basket);

    const openBasket = () => {
        document.getElementById("basketCard").classList.remove("right-[-100%]")
        document.getElementById("basketCard").classList.add("right-[0]")
        document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
    }
    useEffect(() => {
        const localBasket = JSON.parse(localStorage.getItem("basket"))
        if (localBasket) {
            dispatch({ type: SET_BASKET, data: localBasket })

        }

    })
    return (
        <div>
            <div className="h-[50px] w-full bg-[#2A59FE] text-white">
                <div className=" grid grid-cols-12  items-center h-full container justify-between gap-10 ">
                    <Link href={"/"}>
                        <div className=" col-span-3 text-white  font-bold text-[24px] cursor-pointer">Eteration</div>

                    </Link>
                    <div className=" w-[400px] relative col-span-6 lg:block hidden">
                        <SerachInput />
                    </div>
                    <div className="flex gap-4">
                        <div className="lg:flex hidden">
                            <i className="fa-solid fa-bag-shopping text-[24px] mr-2"></i>
                            <span >{totalPrice}₺</span>
                        </div>
                        <div data-cy={"basketOpen"} onClick={openBasket} className="lg:hidden flex cursor-pointer">
                            <i className="fa-solid fa-bag-shopping text-[24px] mr-2"></i>
                            <span >{totalPrice}₺</span>
                        </div>
                        <div className="flex">
                            <i className="fa-solid fa-user text-[24px] mr-2"></i>
                            <span >Kerem</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full lg:hidden px-4 pt-2">
                <SerachInput />
            </div>
        </div>
    )
}
export default Header;