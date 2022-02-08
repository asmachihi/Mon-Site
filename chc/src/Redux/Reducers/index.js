import { combineReducers } from "redux";
import contactReducers from './contactReducers'
import produitReducers from './produitReducers'
import clientReducers from './clientReducers'
import panierReducers from './panierReducers'



const rootReducer = combineReducers({
    contactReducers,produitReducers,clientReducers,panierReducers
})

export default rootReducer