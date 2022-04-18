import { productsCall, productCall } from "@/api/products/productsApiCall"
import { SET_PRODUCTS, SET_BRANDS, SET_MODELS, SET_TOTAL_PAGE, SET_PRODUCT } from "@/redux/types"
export const getProductsAction = (data) => {
    return async (dispatch) => {
        try {
            const response = await productsCall(data);
            dispatch({ type: SET_PRODUCTS, data: response });
        } catch (error) {
            console.log(error);
        }
    }
}
export const getModelAndBrandAction = () => {
    return async (dispatch) => {
        try {
            let brands = [];
            let models = []
            const response = await productsCall();
            response.map((e, index) => {
                if (brands.indexOf(e.brand) == -1) {
                    brands.push(e.brand)
                }
                if (models.indexOf(e.model) == -1) {
                    models.push(e.model)
                }
            })
            dispatch({ type: SET_BRANDS, data: brands })
            dispatch({ type: SET_MODELS, data: models })
            dispatch({ type: SET_TOTAL_PAGE, data: response.length / 12 })

        } catch (error) {
            console.log(error);
        }
    }
}
export const getProductAction = (id) => {
    return async (dispatch) => {
        try {
            const response = await productCall(id);
            dispatch({ type: SET_PRODUCT, data: response });
        } catch (error) {
            console.log(error);
        }
    }
}