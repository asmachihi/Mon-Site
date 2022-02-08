import axios from 'axios'
import { AJOUT_PANIER } from '../Constants/panierTypes'

export const ajout_panier=()=>async(dispatch)=>{
   try {
       const res = await axios.post('/api/panier')
       dispatch({
           type:AJOUT_PANIER,
           payload:res.data.newPanier
        })
   } catch (error) {
    console.log(error)
   }
}