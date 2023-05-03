import React,{useState,useEffect} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.scss';
import { useForm } from 'react-hook-form';

export default function FormValidationExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){

    const formik = useFormik({
        initialValues:{
            name:'',
            email:''
        },
        onSubmit:values => {
            console.log('Form data' , values);
        },
        validate:values=>{
            let errors = {};
            if(!values.name){
                errors.name = 'Required!'
            }
            if(!values.email){
                errors.email = 'Required!'
            }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)){
                errors.email = 'Invalid email format!'
            }
            return errors
          }
    });
    console.log('Errors' , formik.errors);
    return(
        <>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name &nbsp; 
                    {formik.errors.name && <div className="error">{formik.errors.name}</div>}
                </label>
                <input id='name' type='text' placeholder='Name' onChange={formik.handleChange} value={formik.values.name } />

                <label htmlFor='email'>Email &nbsp;
                    {formik.errors.email && <div className="error">{formik.errors.email}</div>}
                </label>
                <input id='email' type='email' placeholder='Email' onChange={formik.handleChange} value={formik.values.email } />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

// function Example(){

//     const intialValues = { email: "", password: "" };

//   const [formValues, setFormValues] = useState(intialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const submit = () => {
//     console.log(formValues);
//   };

//   //input change handler
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   //form submission handler
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmitting(true);
//   };

//   //form validation handler
//   const validate = (values) => {
//     let errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

//     if (!values.email) {
//       errors.email = "Cannot be blank";
//     } else if (!regex.test(values.email)) {
//       errors.email = "Invalid email format";
//     }

//     if (!values.password) {
//       errors.password = "Cannot be blank";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     }

//     return errors;
//   };

//   useEffect(() => {
//     if (Object.keys(formErrors).length === 0 && isSubmitting) {
//       submit();
//     }
//   }, [formErrors]);
//     return(
//         <>
//         <div className="container">
//             <h1>Sign in to continue</h1>
//             {Object.keys(formErrors).length === 0 && isSubmitting && (
//                 <span className="success-msg">Form submitted successfully</span>
//             )}
//             <form onSubmit={handleSubmit} noValidate>
//                 <div className="form-row">
//                 <label htmlFor="email">Email</label>
//                 <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={formValues.email}
//                     onChange={handleChange}
//                     className={formErrors.email && "input-error"}
//                 />
//                 {formErrors.email && (
//                     <span className="error">{formErrors.email}</span>
//                 )}
//                 </div>

//                 <div className="form-row">
//                 <label htmlFor="password">Password</label>
//                 <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     value={formValues.password}
//                     onChange={handleChange}
//                     className={formErrors.password && "input-error"}
//                 />
//                 {formErrors.password && (
//                     <span className="error">{formErrors.password}</span>
//                 )}
//                 </div>

//                 <button type="submit">Sign In</button>
//             </form>
//             </div>
//         </>
//     )
// }

// function Example(){

//     const validationSchema = Yup.object().shape({
//         fullname: Yup.string().required('Fullname is required'),
//         username: Yup.string()
//           .required('Username is required')
//           .min(6, 'Username must be at least 6 characters')
//           .max(20, 'Username must not exceed 20 characters'),
//         email: Yup.string().required('Email is required').email('Email is invalid'),
//         password: Yup.string()
//           .required('Password is required')
//           .min(6, 'Password must be at least 6 characters')
//           .max(40, 'Password must not exceed 40 characters'),
//         confirmPassword: Yup.string()
//           .required('Confirm Password is required')
//           .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
//         acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
//       });
    
//       const formik = useFormik({
//         initialValues: {
//           fullname: '',
//           username: '',
//           email: '',
//           password: '',
//           confirmPassword: '',
//           acceptTerms: false,
//         },
//         validationSchema,
//         // validateOnChange: false,
//         // validateOnBlur: false,
//         onSubmit: (data) => {
//           console.log(JSON.stringify(data, null, 2));
//         },
//       });
    

//     return(
//         <>
//          <form onSubmit={formik.handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="fullname">Full Name</label>
//           <input
//             name="fullname"
//             type="text"
//             className={
//               'form-control' +
//               (formik.errors.fullname && formik.touched.fullname
//                 ? ' is-invalid'
//                 : '')
//             }
//             onChange={formik.handleChange}
//             value={formik.values.fullname}
//           />
//           <div className="invalid-feedback">
//             {formik.errors.fullname && formik.touched.fullname
//               ? formik.errors.fullname
//               : null}
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="username"> Username </label>
//           <input
//             name="username"
//             type="text"
//             className={
//               'form-control' +
//               (formik.errors.username && formik.touched.username
//                 ? ' is-invalid'
//                 : '')
//             }
//             onChange={formik.handleChange}
//             value={formik.values.username}
//           />
//           <div className="invalid-feedback">
//             {formik.errors.username && formik.touched.username
//               ? formik.errors.username
//               : null}
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="email"> Email </label>
//           <input
//             name="email"
//             type="email"
//             className={
//               'form-control' +
//               (formik.errors.email && formik.touched.email ? ' is-invalid' : '')
//             }
//             onChange={formik.handleChange}
//             value={formik.values.email}
//           />
//           <div className="invalid-feedback">
//             {formik.errors.email && formik.touched.email
//               ? formik.errors.email
//               : null}
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="password"> Password </label>
//           <input
//             name="password"
//             type="password"
//             className={
//               'form-control' +
//               (formik.errors.password && formik.touched.password
//                 ? ' is-invalid'
//                 : '')
//             }
//             onChange={formik.handleChange}
//             value={formik.values.password}
//           />
//           <div className="invalid-feedback">
//             {formik.errors.password && formik.touched.password
//               ? formik.errors.password
//               : null}
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="confirmPassword"> Confirm Password </label>
//           <input
//             name="confirmPassword"
//             type="password"
//             className={
//               'form-control' +
//               (formik.errors.confirmPassword && formik.touched.confirmPassword
//                 ? ' is-invalid'
//                 : '')
//             }
//             onChange={formik.handleChange}
//             value={formik.values.confirmPassword}
//           />
//           <div className="invalid-feedback">
//             {formik.errors.confirmPassword && formik.touched.confirmPassword
//               ? formik.errors.confirmPassword
//               : null}
//           </div>
//         </div>

//         <div className="form-group form-check">
//           <input
//             name="acceptTerms"
//             type="checkbox"
//             className={
//               'form-check-input' +
//               (formik.errors.acceptTerms && formik.touched.acceptTerms
//                 ? ' is-invalid'
//                 : '')
//             }
//             onChange={formik.handleChange}
//             value={formik.values.acceptTerms}
//           />
//           <label htmlFor="acceptTerms" className="form-check-label">
//             I have read and agree to the Terms
//           </label>
//           <div className="invalid-feedback">
//             {formik.errors.acceptTerms && formik.touched.acceptTerms
//               ? formik.errors.acceptTerms
//               : null}
//           </div>
//         </div>

//         <div className="form-group">
//           <button type="submit" className="btn btn-primary">
//             Register
//           </button>
//           <button
//             type="button"
//             className="btn btn-warning float-right"
//             onClick={formik.handleReset}
//           >
//             Reset
//           </button>
//         </div>
//       </form>
//         </>
//     )
// }