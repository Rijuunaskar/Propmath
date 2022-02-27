import React from "react";
import {GetUser} from "../services/Restservice";
import {Outlet,Navigate} from "react-router";
import { useNavigate } from 'react-router-dom';





const ProtectedRoute=()=> {
    let navigate = useNavigate();
    const Isloggedin = async () => {
        let contact = localStorage.getItem("contact");
        let data = await GetUser(contact);
        if(!data.success){
            navigate("/login")
        }
        return data.success;
    }
    
    Isloggedin();

    return  <Outlet/> ;
}

export default ProtectedRoute;
