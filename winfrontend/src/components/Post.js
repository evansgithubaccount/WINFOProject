import React from 'react';

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
            url: this.props.url,
            uploader: this.props.uploader,
            language: this.props.language,
            topic: this.props.topic,
            project: this.props.project
        }
    }

    render(){
        return(
            <div className='post'>
                
            </div>
        )
    }
}

export default Post;