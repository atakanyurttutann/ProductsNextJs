import { useRouter } from "next/router";
import { useState } from "react";
import { ProductCard, BasketFullCard } from "@/ui/cards/index"
const ProductView = () => {
    const router = useRouter();
    const id = router.query.id;
    return (
        <div>
            <div className=" grid grid-cols-12 gap-6">
                <div className=" lg:col-span-9 col-span-12 lg:mt-8 mt-0 ">
                    <ProductCard />
                </div>
                <div className="lg:col-span-3">
                    <BasketFullCard />
                </div>
            </div>
        </div>
    )
}
export default ProductView