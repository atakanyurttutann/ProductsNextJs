import axios from "axios";
import { GET_PRODUCTS } from "./productsApi"
export const productsCall = async (data) => {
    try {
        const response = await axios({
            method: "GET",
            url: GET_PRODUCTS,
            params: data,
        });
        const responseData = response.data;
        return responseData;
    } catch (error) {
        throw error?.response?.data;
    }
};
export const productCall = async (id) => {
    try {
        const response = await axios({
            method: "GET",
            url: GET_PRODUCTS + "/" + id,
        });
        const responseData = response.data;
        return responseData;
    } catch (error) {
        throw error?.response?.data;
    }
};