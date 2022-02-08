import axios from "axios";
import { CURRENT_CLIENT, FAIL_CLIENT, GET_CLIENTS, LOAD_CLIENT, LOGIN_CLIENT, LOGOUT, REGISTER_CLIENT, VIDE_ERRORS } from "../Constants/clientTypes";


//afficher la liste des clients
export const get_clients =()=> async(dispatch) =>{
    try {

        const res = await axios.get('/api/client')
        dispatch({
            type:GET_CLIENTS,
            payload:res.data.clients
        })

    } catch (error) {
        console.log(error)
    }
}

//ajout d'un client
export const ajout_client = (newClient) => async(dispatch) =>{
    try {

        await axios.post('/api/client',newClient)
        dispatch(get_clients())

    } catch (error) {
        console.log(error)
    }
}

//modiffier un client
export const update_client =(ID,newClient) => async(dispatch) =>{
    try {
        
        await axios.put(`api/client/${ID}`,newClient)
        dispatch(get_clients())

    } catch (error) {
        console.log(error)
    }
}

//inscription
export const register= (client,history) => async(dispatch) => {
    dispatch({
        type:LOAD_CLIENT
    })
    try {
        
        const res = await axios.post('/api/client/signUp',client)
        dispatch({
            type:REGISTER_CLIENT,
            payload:res.data
        })

        history.push('/profil')

    } catch (error) {
        dispatch({
            type:FAIL_CLIENT,
            payload:error.response ? error.response.data:'à verifier'
        })
    }
}

//connexion
export const login =(client,history)=>async(dispatch) =>{
    dispatch({
        type:LOAD_CLIENT
    })
    try {
 
        const res = await axios.post('/api/client/signIn',client)
        dispatch({
            type:LOGIN_CLIENT,
            payload:res.data
        })

        history.push('/profil')        
        
    } catch (error) {
        dispatch({
            type:FAIL_CLIENT,
            payload:error.response ? error.response.data:'à verifier'
        })
    }
}

//autorisation
export const current =() => async(dispatch) =>{
    const config ={
        headers:{
            autorisé:localStorage.getItem('token')
        }
    }
    try {

         const res = await axios.post('/api/client/current',config)

         dispatch({
            type:CURRENT_CLIENT,
            payload:res.data
        })
        
    } catch (error) {
        dispatch({
            type:FAIL_CLIENT,
            payload:error.response ? error.response.data.code.toString():'à verifier'
        })
    }
}

//déconnexion
export const logout =()=>{
    return{
        type:LOGOUT
    }
}

//vider les erreurs
export const videErrors =() =>{
    return{
        type:VIDE_ERRORS
    }
}