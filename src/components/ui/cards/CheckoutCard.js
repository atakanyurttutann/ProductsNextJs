import React from 'react'
import { useSelector } from "react-redux"

const CheckoutCard = () => {
    const { totalPrice } = useSelector(state => state.basket);

    return (
        <div className=' shadow-xl h-auto w-full bg-white p-4 mt-2'>
            <div>Total Price: <span className='text-[#2a59fe] font-bold'>{totalPrice}₺</span></div>
            <button className=" mt-2 w-full  justify-center items-center bg-[#2A59FE] text-white py-[8px] rounded-[4px]">Checkout</button>

        </div>
    )
}
export default CheckoutCard;
