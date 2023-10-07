import { AxiosError } from "axios";
import { axiosInstance } from "../configs/axiosInstance";

export const APIProduct = {
	getProducts: async () => {
		try {
			const result = await axiosInstance.get("products");
			return result.data;
		} catch (err) {
			if (err instanceof AxiosError) {
				const {
					data: { error },
				} = err.response;
				throw new AxiosError(error);
			}
			throw new Error(err);
		}
	},

	addProduct: async (data) => {
		try {
			await axiosInstance.post(`products`, data);
			alert(`Add data success`);
		} catch (err) {
			if (err instanceof AxiosError) {
				const {
					data: { error },
				} = err.response;
				throw new AxiosError(error);
			}
			throw new Error(err);
		}
	},

	updateProduct: async (id, data) => {
		try {
			await axiosInstance.put(`products/${id}`, data);
		} catch (err) {
			if (err instanceof AxiosError) {
				const {
					data: { error },
				} = err.response;
				throw new AxiosError(error);
			}
			throw new Error(err);
		}
	},
	deleteProduct: async (data) => {
		try {
			await axiosInstance.delete(`products/${data.id}`);
			alert(`Delete data ${data.name} success`);
		} catch (err) {
			if (err instanceof AxiosError) {
				const {
					data: { error },
				} = err.response;
				throw new AxiosError(error);
			}
			throw new Error(err);
		}
	},
};
