import React from 'react';
import {Popover, Input, Button} from 'antd';
import {withRouter} from 'react-router-dom';
import UploadLink from './UploadLink';

class LinkPopover extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: true
        }
    }

    hide = () => {
        this.setState({
          visible: false,
        });
      };
    
      handleVisibleChange = visible => {
        this.setState({ visible });
      };

    render(){
        return (
            <Popover 
                    content={UploadLink} 
                    title='Upload Link' 
                    trigger='click' 
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
            >
                <Button type='primary'>Upload Link</Button>
            </Popover>
        )
    }
}

export default LinkPopover;