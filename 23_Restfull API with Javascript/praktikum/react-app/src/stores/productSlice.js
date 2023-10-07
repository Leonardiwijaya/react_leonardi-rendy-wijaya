import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

const products = [
    {
        id: uuidv4(),
        name: 'Samsung',
        category: 'smartphone',
        image: '',
        freshness: 'new',
        description: 'Samsung Galaxy Note',
        price: 6000,
    },
    {
        id: uuidv4(),
        name: 'Asus',
        category: 'laptop',
        image: '',
        freshness: 'new',
        description: 'Asus Vivobook',
        price: 7300,
    },
    {
        id: uuidv4(),
        name: 'Iphone',
        category: 'smartphone',
        image: '',
        freshness: 'old',
        description: 'Iphone x',
        price: 5000,
    },
    {
        id: uuidv4(),
        name: 'Macbook',
        category: 'laptop',
        image: '',
        freshness: 'new',
        description: 'Macbook Pro',
        price: 9000,
    },
]

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: products
    },
    reducers: {
        addProduct: (state, action) => {
            const newData = {
                id: uuidv4(),
                ...action.payload
            }
            state.products = [...state.products, newData];
        },
        editProduct: (state, action) => {
            const idx = state.products.findIndex((product) => product.id === action.payload.id)
            state.products[idx] = action.payload;
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload)
        }
    }
});


export const selectProducts = (state) => state.products.products;
export const {addProduct, deleteProduct, editProduct} = productSlice.actions;
export default productSlice.reducer;