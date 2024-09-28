import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [

    ],
    cart_1: '',
    cart_2: '',
    total: 0
}

Object.keys(localStorage).forEach(key => initialState.items.push(JSON.parse(localStorage[key])))
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
            localStorage.removeItem("id_" + action.payload);
        },
        deleteItemFromCheckout: (state, action) => {


            state.items = state.items.filter(item => item.id !== action.payload)
            localStorage.removeItem("id_" + action.payload);

        },
        deleteItemAll: (state, action) => {
            state.items = []
            localStorage.clear();
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