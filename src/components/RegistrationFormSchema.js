import * as Yup from 'yup';
const FormSchema = Yup.object().shape({
    fullname: Yup.string().required('Full Name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup
        .string()
        .matches(/^[0-9]+$/, 'Enter your phone Number')
        .required('Phone number is required'),
    password: Yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPass: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password'),
    gender: Yup.string().required('Gender is required'),
});

export default FormSchema;