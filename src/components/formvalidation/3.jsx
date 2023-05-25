import React,{useState,useEffect} from 'react'

export default function CustomFormHooks() {

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
      } = useForm(login, Validate);
    
      function login() {
        console.log('No errors, submit callback called!');
      }


  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
            </form>
    </>
  )
}


function Validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    return errors;
  };

  const useForm = (callback, validate) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    }, [errors]);
  
    const handleSubmit = (event) => {
      if (event) event.preventDefault();
      setErrors(validate(values));
      setIsSubmitting(true);
    };
  
    const handleChange = (event) => {
      event.persist();
      setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };
  
    return {
      handleChange,
      handleSubmit,
      values,
      errors,
    }
  };