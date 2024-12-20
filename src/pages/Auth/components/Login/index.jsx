import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm/index';

Login.propTypes = {
    
};

function Login(props) {


    const handleSubmit = (value) => {
        console.log(value);
        
    }


    return (
        <div>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Login;