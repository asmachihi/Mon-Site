import {AJOUT_PANIER} from '../Constants/panierTypes'


const initState={
   paniers:[],
}


const panierReducers = (state=initState,{type,payload})=>{
  switch (type) {
      case AJOUT_PANIER:
          return{
              ...state,paniers:payload
          }
          
  
      default:
         return state
  }
}



export default panierReducers



