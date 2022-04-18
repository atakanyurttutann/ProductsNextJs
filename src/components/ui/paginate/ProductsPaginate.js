import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux";
import { SET_TOTAL_PAGE, SET_FILTER } from "@/redux/types"

const ProductsPaginate = () => {
    const dispatch = useDispatch();
    const { productsFilter, totalPage } = useSelector(state => state.products)

    return (
        <div>
            <div className="flex justify-center items-center my-4">
                <ReactPaginate
                    previousLabel={
                        <i className="fa fa-chevron-left text-[#868da6]" aria-hidden="true"></i>
                    }
                    nextLabel={
                        <i className="fa fa-chevron-right text-[#868da6]" aria-hidden="true"></i>
                    }
                    pageCount={totalPage}
                    onPageChange={(e) => { dispatch({ type: SET_FILTER, data: { ...productsFilter, page: e.selected + 1 } }) }}
                    containerClassName={
                        "flex pl-0 rounded list-none  pageUser"
                    }
                    activeLinkClassName={"pagination-active"}
                /></div>
        </div>
    )
}
export default ProductsPaginate;