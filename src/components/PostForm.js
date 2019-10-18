import React, { Component } from 'react';

class PostForm extends Component {
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
    }

    render() {
        const { email, username, name, password_digest } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="email" value={email} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="username" value={username} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="name" value={name} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="password_digest" value={password_digest} onChange={this.changeHandler} />
                    </div>
                    <button type="submit"> Submit </button>
                </form>
            </div>
        );
    }
}

export default PostForm;