import axios from 'axios';

const API_URL = 'http://localhost:8080';
const ALL_USERS_URL = '/users';
const BY_USERNAME_URL = '/users/';

class UserDataService{

    retrieveAllUsers(){
        return axios.get(API_URL+ALL_USERS_URL);
    }

    retrieveUserByUsername(username){
        return axios.get(API_URL+BY_USERNAME_URL+username);
    }
}

export default new UserDataService;