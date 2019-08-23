import {API_BASE_URL, ACCESS_TOKEN} from '../constants';
import axios from 'axios';

const request = function(options){
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if(localStorage.getItem(ACCESS_TOKEN)){
        headers.append('Authorization', 'Bearer' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response =>
        response.json().then(json => {
            if(!response.ok){
                return Promise.reject(json);
            }
            return json;
        })
    )
}

export function login(loginRequest){
    return request({
        url: API_BASE_URL + "/api/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest),
        data:  {
            username: loginRequest.username,
            password: loginRequest.password
        }
    });
}

export function signup(signupRequest){
    return request({
        url: API_BASE_URL + '/api/auth/signup',
        method: "POST",
        data: {
            username: signupRequest.username,
            password: signupRequest.password
        },
        body: JSON.stringify(signupRequest)
    })
}

export function checkUsernameAvailability(username){
    return request({
        url: API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
        method: 'GET'
    })
}

export function getCurrentUser(){
    if(!localStorage.getItem(ACCESS_TOKEN)){
        return Promise.reject("No access token set");
    }

    const atok = localStorage.getItem(ACCESS_TOKEN);

    return request({
        url: API_BASE_URL + "/user/me/" + atok.toString(),
        method: 'GET'
    })
}

export function getUserProfile(username){
    return request({
        url: API_BASE_URL + "/users/" + username,
        method: 'GET'
    })
}