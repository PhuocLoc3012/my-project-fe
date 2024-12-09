import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
    
};

const handleSubmit = async (values) => {

    try {
        //auto set username = email để thỏa cái api mẫu
        //.username = values.email

        console.log('Form submit: ', values);
       // const action = register(values)
       // const resultAction = await dispatch(action)
       // const user = unwrapResult(resultAction)   
       // console.log("new user: ", user);

       
    } catch (error){
        console.log('Failed to register: ', error);
        
    }
}
function Register(props) {
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;