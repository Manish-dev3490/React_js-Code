import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
    name: "cart",
    initialState: {
        item: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.item.push(action.payload)
        },
        removeItem: (state, action) => {
            state.item.pop()
        },
        deleteCart: (state) => {
            state.item.length = 0;
            return { item: [] }
        },

    }
})

export const {addItem,removeItem,deleteCart}=CartSlice.actions;
export default CartSlice.reducer;