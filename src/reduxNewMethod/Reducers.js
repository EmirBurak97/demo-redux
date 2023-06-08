import { createSlice, configureStore } from "@reduxjs/toolkit";

const actionSlice = createSlice(category)({
    name:'configureActions',
    initialState:{
        currentCategory : {categoryName : "Beverages"}
    },
    reducers : {
        //changeCategory2(state,action){
        //}
    }
})

export const {changeCategory2} = actionSlice.actions
export const store = configureStore({
    reducer : actionSlice.reducer
  })
export default actionSlice.reducer