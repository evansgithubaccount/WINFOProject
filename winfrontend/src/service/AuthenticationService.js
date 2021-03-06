import axios from 'axios';

const API_URL = 'http://localhost:8080';
const AUTH_URL = '/signin'

class AuthenticationService{
    executeBasicAuthentication(username, password){
        return axios.post(`${API_URL}/signup/${username}/${password}`)
    }

    createBasicAuthToken(username, password){
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password){
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    setupAxiosInterceptors(token){
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = token
                }
                return config;
            }
        )
    }
}

export default new AuthenticationService;