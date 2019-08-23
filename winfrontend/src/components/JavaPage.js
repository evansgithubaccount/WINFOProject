import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PostDataService from '../service/PostDataService';
import Post from './Post';
import '../css/LanguagePage.css';



class JavaPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
        this.getJavaPosts = this.getJavaPosts.bind(this);
    }

    componentDidMount(){
        this.getJavaPosts();
    }

    getJavaPosts(){
        PostDataService.retrieveLanguagePosts('java')
        .then(
            response => {
                this.setState({
                    posts: response.data
                })
            }
        )
    }

    render() {
        return (
            <div id='javaPage'>
                <div class="row">
                {this.state.posts.map(function(post){
                    return(<Post title={post.title} description={post.description} url={post.url}></Post>)
                })}
                </div>
            </div>

        )
    }
}

export default withRouter(JavaPage);