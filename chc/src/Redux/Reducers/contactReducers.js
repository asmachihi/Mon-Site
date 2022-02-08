import { GET_CONTACTS } from "../Constants/contactTypes";


const initState = {
    contacts:[]
}

const contactReducers =(state=initState , {type,payload}) =>{
   switch (type) {
       case GET_CONTACTS:
           return {
                ...state,contacts:payload
           }
       default:
           return state;
   }
}

export default contactReducers