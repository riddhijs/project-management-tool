import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type IntialStateType ={
    isSidebarCollapsed:boolean;
    isDarkMode:boolean
}
const initialState:IntialStateType = {
    isSidebarCollapsed:false,
    isDarkMode:false
}
 const globalSlice = createSlice({
    name:'global',
    initialState,
    reducers:{
        setIsSidebarCollapsed:(state, action:PayloadAction<boolean>) =>{
            state.isSidebarCollapsed = action.payload
        },
        setIsDarkMode:(state, action:PayloadAction<boolean>) =>{
            state.isDarkMode = action.payload
        }
    }
})
export const {setIsDarkMode, setIsSidebarCollapsed} = globalSlice.actions;
export default globalSlice.reducer