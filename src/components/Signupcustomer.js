import React from 'react';

function Signupcustomer() {
    return (
        <div className="signupcustomer">
            <form className="form my-5">
                <h1>Customer Sign-up Form</h1>
                <div class="mb-3 my-5">
                    <label for="username" class="form-label">Username</label>
                    <input type="username" class="form-control" id="username" aria-describedby="username" />
                    <div id="username" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="PhoneNumber" class="form-label">Phone Number</label>
                    <input type="PhoneNumber" class="form-control" id="PhoneNumber" aria-describedby="PhoneNumber" />
                    <div id="PhoneNumber" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="Address" class="form-label">Address</label>
                    <input type="Address" class="form-control" id="Address" aria-describedby="Address" />
                    <div id="Address" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Sign Up</button>
            </form>
            <p class="para-2">
                Not have an account? <a href="index.html">Sign Up Here</a>
            </p>
        </div>
    )
}

export default Signupcustomer;
