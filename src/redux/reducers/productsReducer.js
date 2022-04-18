import * as types from "@/redux/types";

const initialProps = {
    products: [],
    brands: [],
    models: [],
    productsFilter: {
        page: 1,
        limit: 12,
        sortBy: "createdAt",
        order: "desc",

    },
    totalPage: 1,
    product: {},

};

export const productsReducer = (state = initialProps, action) => {
    switch (action.type) {
        case types.SET_PRODUCTS:
            return {
                ...state,
                products: action?.data,
            };
        case types.SET_BRANDS:
            return {
                ...state,
                brands: action?.data,
            };
        case types.SET_MODELS:
            return {
                ...state,
                models: action?.data,
            };
        case types.SET_FILTER:
            return {
                ...state,
                productsFilter: action?.data,
            };
        case types.SET_TOTAL_PAGE:
            return {
                ...state,
                totalPage: action?.data,
            };
        case types.SET_PRODUCT:
            return {
                ...state,
                product: action?.data,
            };
        default:
            return {
                ...state,
            };
    }
};
