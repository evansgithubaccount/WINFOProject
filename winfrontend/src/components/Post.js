import React from 'react';
import {Link} from 'react-router-dom';

class Post extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props.url)
    }

    render(){
        return(
            <div className='post'>
                <div className='postTitle' className='card'>
                    <div className='card-body'>
                        <a target='_blank' href={`https://${this.props.url}`} className='card-title'>{this.props.title}</a>
                        <p class="card-text">{this.props.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;