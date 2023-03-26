import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        cart:[],
        searchitems:[],
        allitems:[],
        viewpostid:false,
    },
    reducers:{
        additem:(state,action)=>{

            state.cart = action.payload;
            
        },
        allitem:(state,action)=>{

            state.allitems= action.payload;
            state.searchitems= action.payload;
            
        },changeQuery:(state,action)=>{
            state.searchitems= action.payload;
        },
      
        
        
    }
})
export const { additem,allitem,changeQuery }= appSlice.actions
export default appSlice.reducer;