import axios, {AxiosResponse} from "axios";
import {GetAllProductsModel} from "../models/responses/GetAllProductsModel";
import {ProductModel} from "../models/responses/ProductModel";
import axiosInstance from "../utils/interceptors/axiosInterceptors";

const API_URL = "https://dummyjson.com/products";

class ProductService {
	getAll(): Promise<AxiosResponse<GetAllProductsModel, any>> {
		return axiosInstance.get<GetAllProductsModel>("products");
	}

	getById(id: number) {
		return axiosInstance.get<ProductModel>(API_URL + "products/" + id);
	}

	delete(id: number) {
		return axiosInstance.delete<ProductModel>(API_URL + "products/" + id);
	}
}

// import ederken direkt bir instance sunar.
export default new ProductService();