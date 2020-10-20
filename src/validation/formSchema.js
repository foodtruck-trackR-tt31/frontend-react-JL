import * as yup from 'yup'

export default yup.object().shape({
    username: yup.string().required('username is required'),
    email: yup.string().email('must be a valid email address').required('email is required'),
    password: yup.string().required('password is required'),
    role: yup.string().oneOf(['1', '2'], 'User Type is required'),    
});