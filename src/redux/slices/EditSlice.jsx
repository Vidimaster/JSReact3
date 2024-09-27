import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit';

const initialState = {
    items: [

    ],
    cart_1: '',
    cart_2: ''
}

Object.keys(localStorage).forEach(key => initialState.items.push(localStorage[key]))
initialState.cart_1 = initialState.items[0]
initialState.cart_2 = initialState.items[1]

const changeSlice = createSlice({
    name: 'product_action',
    initialState,
    reducers: {
        addItem: (state, action) => {

            const storedUserData = localStorage.getItem("id_" + action.payload)
            if (storedUserData) {
                const userData = JSON.parse(storedUserData)
                localStorage.setItem("id_" + action.payload, JSON.stringify({ id: action.payload, quantity: userData.quantity + 1 }));
            }
            else {
                localStorage.setItem("id_" + action.payload, JSON.stringify({ id: action.payload, quantity: 1 }));
            }

            if (state.cart_1 !== action.payload) {
                state.cart_2 = state.cart_1;
                state.cart_1 = action.payload
            }

        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        editItem: (state, action) => {
            const ind = state.items.findIndex(
                (item) => item.id === action.payload.id,
            );
            if (ind !== -1) {
                state.items[ind] = action.payload;
            }
        },
    }
});

export const selectItems = state => state.delete.items;
export const { addItem, deleteItem, editItem } = changeSlice.actions;
export default changeSlice.reducer; 