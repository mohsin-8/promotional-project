import React from 'react';
import './styles/style.css';
function Signuprestaurant() {
    return (
        <>
            <div class="signup-box">
                <h1>Sign Up</h1>
                <h4>Restaurant Sign-up Form</h4>
                <div>
                    <form>
                        <label for="name">Restaurant name</label>
                        <input type="text" name="name" placeholder="" />
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="" />
                        <label for="number">Phone Number</label>
                        <input type="tel" name="number" placeholder="" />
                        <label for="address">Address</label>
                        <input type="text" name="address" placeholder="" />
                        <label for="password">Password</label>
                        <input type="password" name="password" placeholder="" />
                        <label for="password2">Confirm Password</label>
                        <input type="password" name="password2" placeholder="" />
                        <button class="btn">Sign-up</button>
                        {/* <input class="btn" type="submit" value="Sign-up">  */}
                    </form>
                </div>

            </div>

            <p class="para-2">
                Already have an account? <a href="Login.html">Login Here</a>
            </p>
        </>
    )
}

export default Signuprestaurant;