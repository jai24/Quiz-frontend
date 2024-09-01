import { BACKEND_URL } from "./constant";
import axios from 'axios';


export function login({email, password}){

        try{
            const response = axios.post(`${BACKEND_URL}/auth/login`,{
                email,
                password
            },{
                headers: {
                    'Content-Type' :'application/x-www-form-urlencoded'
                }
            })
            return response;
        }   
        catch(error){
            console.log(error)
            throw error;
        } 
}

export function signup({name, email, password, password2}){

    try{
        const response = axios.post(`${BACKEND_URL}/auth/register`,{
            name,
            email,
            password,
            password2
        },{
            headers: {
                'Content-Type' :'application/x-www-form-urlencoded'
            }
        })
        return response;
    }   
    catch(error){
            console.log(error)
            throw error;
    } 
}