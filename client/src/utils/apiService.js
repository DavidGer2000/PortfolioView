import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_API_URL;

export const apiGet = async (_url) => {
    try {
        let resp = await axios({
            url: _url,
            method: "GET",
            withCredentials:true
        })
        return resp.data;
    }
    catch (err) {
        throw err;
    }
}

export const doApiMethod = async (_url,_method,_bodyData = {}) => {
    try {
        let resp = await axios({
            url: _url,
            method: _method,
            data:_bodyData,
            withCredentials:true
        })
        return resp.data;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}