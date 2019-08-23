import axios from 'axios';

const API_URL = 'http://localhost:8080';
const UPLOAD_URL = '/addPost/';
const ALL_POSTS = '/allPosts';
const SLASH = '/';
const LANG_POSTS = '/posts/lang/'

class PostDataService {

    uploadPost(title, description, url, type){
        return axios.post(API_URL + UPLOAD_URL + title + SLASH + description + SLASH + url + SLASH + type + SLASH+ '1')
    }
    
    retrieveAllPosts(){
        return axios.get(API_URL + ALL_POSTS);
    }

    retrieveLanguagePosts(language){
        return axios.get(API_URL + LANG_POSTS + language)
    }
}

export default new PostDataService;