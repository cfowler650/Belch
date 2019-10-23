import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";


class PostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            name: '',
            password_digest: '',
            newUser: true,
            response: false
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('/api/users', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    submitLoginHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.get('/api/users/1', this.state)
            .then(response => {
                this.setState({ response: true })
            })
            .catch(error => {
                console.log(error)
            })
    }


    redirect_to_restaurant_page = () => {
        console.log("redirected")
        return <Redirect to={'/restaurant_page'} />
    }
    handleUserStatus = (e) => {
        e.preventDefault()
        this.setState({ newUser: !this.state.newUser })
    }

    render() {
        const { email, username, name, password_digest } = this.state
        return (
            <>
                {this.state.response ?

                    this.redirect_to_restaurant_page()
                    :
                    <div className="bg-text" style={{ display: "flex", flexDirection: "column" }}>

                        {this.state.newUser ? <div>

                            <h2 className="sign-up-header">Create an account</h2>


                            <form className="login-container" onSubmit={this.submitHandler}>
                                <div style={{ width: "80%" }}>
                                    <h5 className="email-h5">Email</h5>
                                    <input className="auth-input-field" type="text" name="email" value={email} onChange={this.changeHandler} />
                                </div>
                                <div style={{ width: "80%" }}>
                                    <h5 className="email-h5">username</h5>
                                    <input className="auth-input-field" type="text" name="username" value={username} onChange={this.changeHandler} />
                                </div>
                                <div style={{ width: "80%" }}>
                                    <h5 className="email-h5">full name</h5>
                                    <input className="auth-input-field" type="text" name="name" value={name} onChange={this.changeHandler} />
                                </div>
                                <div style={{ width: "80%" }}>
                                    <h5 className="email-h5">password</h5>
                                    <input className="auth-input-field" type="text" name="password_digest" value={password_digest} onChange={this.changeHandler} />
                                </div>
                                <button className="form-button" style={{
                                    padding: "3%",
                                    background: "darkblue",
                                    width: "80%",
                                    border: "none",
                                    color: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    fontFamily: "Hind",
                                    marginTop: "10px"


                                }} type="submit"> Continue </button>


                                <div className="guest-button" style={{ width: "80%" }}>
                                    <Link to={`/restaurant_page`} style={{
                                        padding: "4%",
                                        background: "#222",
                                        width: "100%"
                                    }}>Continue as guest...</Link>
                                </div>


                                <p>Already a member? <a onClick={this.handleUserStatus}>Click here.</a></p>
                            </form>

                        </div>

                            :

                            <div>


                                <h2 className="sign-up-header">Login</h2>

                                <form className="login-container" onSubmit={this.submitLoginHandler}>

                                    <div style={{ width: "80%" }}>
                                        <h5 className="email-h5">username</h5>
                                        <input className="auth-input-field" type="text" name="username" value={username} onChange={this.changeHandler} />
                                    </div>

                                    <div style={{ width: "80%" }}>
                                        <h5 className="email-h5">password</h5>
                                        <input className="auth-input-field" type="text" name="password_digest" value={password_digest} onChange={this.changeHandler} />
                                    </div>
                                    <button style={{
                                        padding: "3%",
                                        background: "darkblue",
                                        width: "80%",
                                        border: "none",
                                        color: "white",
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        fontFamily: "Hind",
                                        marginTop: "10px"


                                    }} type="submit"> Continue </button>


                                    <div className="guest-button" style={{ width: "80%" }}>
                                        <Link to={`/restaurant_page`} style={{
                                            padding: "4%",
                                            background: "#222",
                                            width: "100%"
                                        }}>Continue as guest...</Link>
                                    </div>


                                    <p>Not a member? <a onClick={this.handleUserStatus}> Click here to sign up. </a></p>
                                </form>

                            </div>}
                    </div>
                }
            </>
        );

    }

}
export default PostForm;