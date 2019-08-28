import React from 'react';
import {withRouter} from 'react-router-dom';

class UserNotFound extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                User Not Found
            </div>
        )
    }
}

export default withRouter(UserNotFound);