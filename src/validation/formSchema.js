import * as yup from 'yup'

export default yup.object().shape({
    username: yup.string().required('username is required'),
    email: yup.string().email('must be a valid email address').required('email is required'),
    password: yup.string().required('password is required'),
    userType: yup.string().oneOf(['operator', 'diner'], 'User Type is required'),    
});