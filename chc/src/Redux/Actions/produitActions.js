import axios from 'axios'
import { ADD_TO_CART, GET_PRODUITS,MOINS,REMOVE_FROM_CART,PLUS,DELETE_PRODUIT,AJOUT_PRODUIT} from '../Constants/produitTypes'



//afficher les produits
export const get_produits=()=>async(dispatch) =>{
   try {
       const res = await axios.get('/api/produit')
       dispatch({
           type:GET_PRODUITS,
           payload:res.data.produits
       })

   } catch (error) {
       console.log(error)
   }

}

//supprimer un produit
export const delete_produit =(id) => async(dispatch) =>{
    try {
        const res = await axios.delete(`/api/produit/${id}`)
        dispatch({
            type:DELETE_PRODUIT,
            payload:res.data.produitsup
        })
    } catch (error) {
        console.log(error)
    }
}
//ajouter un nouveau produit
export const ajout_produit =(newProduit,history) => async(dispatch) =>{
    try {
        const res = await axios.post('/api/produit/ajout',newProduit)
        dispatch({
            type:AJOUT_PRODUIT,
            payload:res.data
           
        })
        history.push('/produitsAdmin')
    } catch (error) {
        console.log(error)
    }
  
}

//ajout au panier
export const addToCart =(ID) =>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/produit/${ID}`)
        dispatch({
            type:ADD_TO_CART,
            payload: res.data.produit
        })
    } catch (error) {
        console.log(error)
    }
}

export const removeFromCart = (ID) => async (dispatch) => {
    try {
       
       dispatch({
           type: REMOVE_FROM_CART,
           payload :ID
       })
        
    } catch (error) {
        console.log(error)
    }
}


export const plus=(x)=>{
    return {
        type:PLUS,
        payload:x
    }
}
export const moins=()=>{
    return {
        type:MOINS
    }
}
