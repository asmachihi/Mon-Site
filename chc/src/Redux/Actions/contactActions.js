import axios from "axios"
import {GET_CONTACTS} from '../Constants/contactTypes'


export const get_contacts = () =>async(dispatch)=>{
    try {
        const res =await axios.get('/api/contact')
        dispatch({
            type:GET_CONTACTS,
            payload:res.data.contacts
        })
    } catch (error) {
        console.log(error)
    }
}

export const ajout_contact = (newContact) => async(dispatch) => {
    try {
        await axios.post('/api/contact',newContact)
        dispatch(get_contacts())
        
    } catch (error) {
        console.log(error)
    }
}