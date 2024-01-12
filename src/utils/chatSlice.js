import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(25,1);
          state.messages.push(action.payload);   // unshift -> adds new element in the beginning rather than in the end
        },
    },
})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;