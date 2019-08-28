import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostDataService from '../service/PostDataService';
import queryString from 'query-string';
import Post from './Post';

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            query: ""
        }
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        console.log(values)
        this.setState({
            query: values.q
        })
        this.search(values.q);
    }

    search(query) {
        PostDataService.searchForPosts(query)
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
    }

    render() {
        return (
            <div id='searchPage'>
                <h3>Results For: {this.state.query}</h3>
                <div id='searchResultsContainer'>
                    {this.state.posts.map(function (post) {
                        return (<Post title={post.title} description={post.description} url={post.url}></Post>)
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(SearchResults);