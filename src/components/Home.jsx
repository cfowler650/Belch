import React, { useState, useContext, useEffect } from "react";
import { RestaurantContext } from "../RestaurantContext";

import StyledHome from "../styles/StyledHome";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import axios from "axios";
import StyledModal from "../styles/StyledModal";
import { NONAME } from "dns";
// import PostForm from "./PostForm";

// const LoginModal = () => {
//     return (


//     );
// };



class PostForm extends React.Component {



    //       <>
    //     <div className="bg-text" style={{ display: "flex", flexDirection: "column" }}>
    //         <div>
    //             <h2 className="sign-up-header">Create an account</h2>
    //             <div className="login-container" >
    //                 <h5 className="email-h5">Email</h5>
    //                 <input className="auth-input-field"
    //                     type="text" />
    //                 <h5 className="email-h5" style={{ paddingRight: "71.5%", marginTop: "13px" }}>Password</h5>
    //                 <input
    //                     className="auth-input-field"
    //                     type="text"


    //                 />

    //                 <p>Already a member? Click here.</p>
    //             </div>

    //         </div>
    //         <div className="guest-button">
    //             <Link to={`/restaurant_page`} style={{
    //                 padding: "4%",
    //                 background: "#222",
    //                 width: "380px"
    //             }}>Continue as guest...</Link>
    //         </div>




    //     </div>
    // </>


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            name: '',
            password_digest: '',
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

    render() {
        const { email, username, name, password_digest } = this.state
        return (
            <div className="bg-text" style={{ display: "flex", flexDirection: "column" }}>
                <div>

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


                        <p>Already a member? Click here.</p>
                    </form>








                </div>
            </div>
        );

    }

}



function Home(props) {
    const [restaurants, setRestaurants] = useContext(RestaurantContext);
    const [testdata, setTestdata] = useState({ tester: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("/api/users");
            setTestdata(result.data);
        };
        fetchData();
    }, []);

    return (
        <StyledHome>
            <div className="bg-image-div">
                <img
                    className="bg-image"
                    src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

                />
            </div>
            {/* <LoginModal /> */}
            <PostForm />
            <div className="belch-nav-title">
                Belch
            </div>

            <div className="login-nav-title">


                Login
            </div>
        </StyledHome>
    );
}


export default Home;
