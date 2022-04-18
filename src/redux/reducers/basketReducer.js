import * as types from "@/redux/types";
const initialProps = {
    basket: [],
    totalPrice: 0
};
export const basketReducer = (state = initialProps, action) => {
    switch (action.type) {
        case types.SET_BASKET:
            return {
                ...state,
                basket: action?.data,
            };

        default:
            return {
                ...state,
            };
    }
};
