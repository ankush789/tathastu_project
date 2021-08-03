import React from 'react';
import { Button } from '../Button';

import '../../App.css';

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="form-wrapper">
        <form action="" method="post">
          <div className="form_input">
            <input
              type="text"
              name=""
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form_input">
            <input
              type="email"
              name=""
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form_input">
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter a password"
            />
          </div>
          <div className="form_input">
            <input
              type="password"
              name=""
              id="confirm_password"
              placeholder="Renter password"
            />
          </div>
          <div className="button">
            <Button type="submit">Sign Up</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
