import {createSlice} from "@reduxjs/toolkit";

const initial={
    _id:'',
    name:'',
    email:'',
    age:'',
    gender:'',
    weight:'',
    height:'',
    image:'',
    DateOfJoin:'',
    expirydate:''
}
const userDetails=initial;
const authtoken='';
const isLoggedIn=false;


const userReducer=createSlice({
    name:'userReducer',
    initialState:{
        userDetails:userDetails,
        authtoken:authtoken,
        isLoggedIn:isLoggedIn
    },
    reducers:{
        userLogin:(state, action)=>{
            const data=action.payload;
            state.userDetails=data;
            state.isLoggedIn=true;
        },
        addAuthtoken:(state, action)=>{
            const data=action.payload;
            state.authtoken=data;
        },
        userLogout:(state, action)=>{
            state.userDetails=null;
            state.authtoken=null;
            state.isLoggedIn=false
        },
    }
})

export const {userLogin, addAuthtoken, userLogout} = userReducer.actions;
export default userReducer.reducer;