import axios from 'axios';

const API_URL = 'http://localhost:8080';
const ALL_USERS_URL = '/users';

class UserDataService{

    retrieveAllUsers(){
        return axios.get(API_URL+ALL_USERS_URL);
    }
}

export default new UserDataService;