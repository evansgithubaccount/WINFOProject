import React from 'react';
import AuthenticationService from '../../service/AuthenticationService';
import { login } from '../../util/APIUtils';
import { ACCESS_TOKEN } from '../../constants/index';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Icon, notification } from 'antd';
import '../../css/Login.css';
import {withRouter} from 'react-router-dom';

const FormItem = Form.Item;

class Login extends React.Component {
    render() {
        const AntWrappedLoginForm = Form.create()(LoginForm)
        return (
            <div className='login-container'>
                <h1 className='page-title'>Login</h1>
                <div className='login-content'>
                    <AntWrappedLoginForm onLogin={this.props.onLogin} />
                </div>
            </div>
        )
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                const loginRequest = Object.assign({}, values)
                login(loginRequest)
                    .then(response => {
                        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                        this.props.onLogin();
                    }).catch(error => {
                        if (error.status === 401) {
                            notification.error({
                                message: 'WINFO App',
                                description: 'Your Username or Password is incorrect. Please try again!'
                            });
                        } else {
                            notification.error({
                                message: "WINFO App",
                                description: error.message || 'Sorry! Something went wrong. Please try again!'
                            });
                        }
                    })
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username or email!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" />}
                            size="large"
                            name="username"
                            placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" />}
                            size="large"
                            name="password"
                            type="password"
                            placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" size="large" className="login-form-button">Login</Button>
                    Or <Link to="/signup">Register Now!</Link>
                </FormItem>
            </Form>
        );
    }
}

export default withRouter(Login);