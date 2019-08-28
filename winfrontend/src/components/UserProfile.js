import React from 'react';
import Navigation from './Navigation';
import { Link, withRouter } from 'react-router-dom';
import '../css/UserProfile.css';
import UserDataService from '../service/UserDataService';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            isSelf: '',
            redirect: false,
            loading: true
        }
        this.getUser = this.getUser.bind(this);
    }

    componentDidMount() {
        this.getUser();
    }

    getUser() {
        UserDataService.retrieveUserByUsername(this.props.match.params.username)
            .then(response => {
                if (response.data != "") {
                    this.setState({
                        user: response.data,
                        loading: false
                    })
                }else{
                    this.setState({
                        redirect:true,
                        loading: false
                    })
                }
            }).catch(error => {
                this.setState({
                    redirect: true,
                    loading: false
                })
            })
    }



    render() {
        let profile;
        if(this.state.loading){
            return <h2>Loading...</h2>
        }else if (!this.state.redirect) {
            profile = (
                <div class="container">
                    <div class="row profile">
                        <div class="col-md-3">
                            <div class="profile-sidebar">
                                /* SIDEBAR USERPIC */
                                <div class="profile-userpic">
                                    <span class="profile-picture">
                                        <img class="editable img-responsive" alt=" Avatar" id="avatar2" src="http://bootdey.com/img/Content/avatar/avatar6.png" />
                                    </span>
                                </div>
                                /* END SIDEBAR USERPIC */

                                /* SIDEBAR USER TITLE  */
                                <div class="profile-usertitle">
                                    <div class="profile-usertitle-name">
                                        <h1>{this.props.match.params.username}</h1>
                                    </div>
                                    <div class="profile-usertitle-job">
                                        Developer
                        </div>
                                </div>
                                /* END SIDEBAR USER TITLE */

                                /* SIDEBAR BUTTONS */
                                <div class="profile-userbuttons">
                                    <a href="#" class="btn btn-sm btn-block btn-success">
                                        <i class="ace-icon fa fa-plus-circle bigger-120"></i>
                                        <span class="bigger-110">Add as a friend</span>
                                    </a>
                                    <a href="#" class="btn btn-sm btn-block btn-primary">
                                        <i class="ace-icon fa fa-envelope-o bigger-110"></i>
                                        <span class="bigger-110">Send a message</span>
                                    </a>
                                </div>
                                /* END SIDEBAR BUTTONS */

                                /* SIDEBAR MENU */
                                <div class="profile-usermenu">
                                    <ul class="nav">
                                        <li class="active">
                                            <a href="#">
                                                <i class="glyphicon glyphicon-home"></i>
                                                Home </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="glyphicon glyphicon-user"></i>
                                                Project </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i class="glyphicon glyphicon-ok"></i>
                                                Recent Search Results </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="glyphicon glyphicon-flag"></i>
                                                Help </a>
                                        </li>
                                    </ul>
                                </div>
                            /* END MENU */
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="profile-content">
                                /* Some user related content goes here... */

                                <div class="col-xs-12 col-sm-9">
                                    <h4 class="blue">
                                        <span class="middle">John Doe</span>

                                        <span class="label label-purple arrowed-in-right">
                                            <i class="ace-icon fa fa-circle smaller-80 align-middle"></i>
                                            online
                                        </span>
                                    </h4>

                                    <div class="profile-user-info">
                                        <div class="profile-info-row">
                                            <div class="profile-info-name"> Username </div>

                                            <div class="profile-info-value">
                                                <span>alexdoe</span>
                                            </div>
                                        </div>

                                        <div class="profile-info-row">
                                            <div class="profile-info-name"> Location </div>

                                            <div class="profile-info-value">
                                                <i class="fa fa-map-marker light-orange bigger-110"></i>
                                                <span>Netherlands</span>
                                                <span>Amsterdam</span>
                                            </div>
                                        </div>

                                        <div class="profile-info-row">
                                            <div class="profile-info-name"> Age </div>

                                            <div class="profile-info-value">
                                                <span>38</span>
                                            </div>
                                        </div>

                                        <div class="profile-info-row">
                                            <div class="profile-info-name"> Joined </div>

                                            <div class="profile-info-value">
                                                <span>2010/06/20</span>
                                            </div>
                                        </div>

                                        <div class="profile-info-row">
                                            <div class="profile-info-name"> Last Online </div>

                                            <div class="profile-info-value">
                                                <span>3 hours ago</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="hr hr-8 dotted"></div>
                                </div>  //.col 
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            profile = <div>User Not Found</div>;
        }
        return (
            <div>
                {profile}
            </div>
        )
    }

}

export default withRouter(UserProfile);