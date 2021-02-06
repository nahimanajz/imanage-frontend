import * as yup from 'yup';
const validationSchema = yup.object().shape({
    name:yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required(),
    balance: yup.number().required("fill in zero if you have no money"),
    password: yup.string().required("Please enter your password").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    password_confirmation:  yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match') 
   
});
export default validationSchema;