import React from 'react'

export default class Login extends React.Component {
    render () {
        return (
            <div className="login-form-container">
                <form>
                    <div className="login-form-content">
                        <h3 className="login-form-title">Log In</h3>
                        <div className="form-group mt-2">
                            <label>Username</label>
                            <input
                                type="username"
                                className="form-control mt-1"
                                placeholder="Enter Username"
                            />
                        </div>
                        <div className="form-group mt-2">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter Password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
