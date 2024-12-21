import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm/index';
import { authApi } from 'api/auth';
import { useDispatch } from 'react-redux';
import { userLogin } from 'state/Auth/authSlice';


Login.propTypes = {
    
};

function Login(props) {

    const dispatch = useDispatch()
    const handleSubmit = async (value) => {
        try {
            console.log(value);
            const resultAction = await dispatch(userLogin(value))
            if (resultAction.payload.isAuthSuccessful){
                console.log('10 cay sen da');
                
            }
            
            
        } catch (error) {
            console.error('Error while logging in:', error);
        }
    }


    return (
        <div>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Login;