import React, { useState, useEffect, createContext } from 'react';
import { BASE_URL, apiGet } from '../utils/apiService';

export const userContext = createContext(null);



export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            getProfile();
        }
    }, [])

    const getProfile = async () => {
        try {
            let url = BASE_URL + "/users/authProfile";
            let data = await apiGet(url);
            setUser(data)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <userContext.Provider value={{ user: user, setUser: setUser }}>
            {children}
        </userContext.Provider>
    )
}

