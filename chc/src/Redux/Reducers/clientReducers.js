import { LOAD_CLIENT, LOGIN_CLIENT, REGISTER_CLIENT,GET_CLIENTS, FAIL_CLIENT, CURRENT_CLIENT, LOGOUT, VIDE_ERRORS } from "../Constants/clientTypes"


const initState = {
    client:[],
    errors:null,
    isAuth:false,
    load:false
}

const clientReducers = (state=initState,{type,payload}) => {
   switch (type) {
       case GET_CLIENTS:
          return{
              ...state,client:payload
          } 
        case LOAD_CLIENT:
            return{
                ...state,load:true
            } 
        case REGISTER_CLIENT:
            case LOGIN_CLIENT:
                localStorage.setItem("token",payload.token)
                return{
                    ...state,client:payload.client,
                    load:false,
                    isAuth:true
                }
        case CURRENT_CLIENT:
            return{
                ...state,client:payload.client,
                isAuth:true
            }
        case FAIL_CLIENT:
            return{
                ...state,errors:payload.errors,
                load:false
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return{
                ...state,client:null,
                isAuth:false
            }
        case VIDE_ERRORS:
            return{
                ...state,errors:null
            }
       default:
           return state
   }
}

export default clientReducers