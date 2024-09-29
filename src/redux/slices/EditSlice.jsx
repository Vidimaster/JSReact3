import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [

    ],
    cart_1: '',
    cart_2: '',
    total: 0
}

Object.keys(localStorage).forEach(key => initialState.items.push(JSON.parse(localStorage[key])))
initialState.cart_1 = initialState.items[0] !== undefined ? initialState.items[0].id : undefined
initialState.cart_2 = initialState.items[1] !== undefined ? initialState.items[1].id : undefined

const changeSlice = createSlice({
    name: 'product_action',
    initialState,
    reducers: {
        addItem: (state, action) => {

            const storedUserData = localStorage.getItem("id_" + action.payload.id)
            if (storedUserData) {
                const userData = JSON.parse(storedUserData)
                localStorage.setItem("id_" + action.payload.id, JSON.stringify({ id: action.payload.id, quantity: userData.quantity + action.payload.count }));
            }
            else {
                localStorage.setItem("id_" + action.payload.id, JSON.stringify({ id: action.payload.id, quantity: action.payload.count }));
            }

            if (state.cart_1 !== action.payload.id) {
                state.cart_2 = state.cart_1;
                state.cart_1 = action.payload.id
            }


        },
        deleteItem: (state, action) => {

            if (state.cart_2 === action.payload) {
                state.cart_2 = undefined;

            } else {

                if (state.cart_2 !== undefined) {
                    state.cart_1 = state.cart_2;
                    state.cart_2 = undefined;
                }
                else {
                    state.cart_1 = undefined;
                }

            }
            state.items = state.items.filter(item => item.id !== action.payload)
            localStorage.removeItem("id_" + action.payload);
        },
        deleteItemFromCheckout: (state, action) => {


            state.items = state.items.filter(item => item.id !== action.payload)
            localStorage.removeItem("id_" + action.payload);
            state.cart_1 = undefined;
            state.cart_2 = undefined;
        },
        deleteItemAll: (state, action) => {
            state.items = []
            localStorage.clear();
            state.cart_1 = undefined;
            state.cart_2 = undefined;
        },

        setTotal: (state, action) => {
            state.total = action.payload
        },

    }
});

export const selectItems = state => state.product_action;
export const selectTotal = state => state.product_action.total;

export const { addItem, deleteItem, deleteItemFromCheckout, deleteItemAll, setTotal } = changeSlice.actions;
export default changeSlice.reducer; 