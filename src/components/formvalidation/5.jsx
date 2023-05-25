import React,{useState,useEffect,useRef} from 'react';
import { useForm } from "react-hook-form";

export default function CustomFormHooks() {

    const [state, setState] = useState({
        email: "",
        password: ""
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };
    
    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(state);
    //   };

      const {
        register,
        handleSubmit,reset ,
        formState: { errors },
      } = useForm();



      const onSubmit = (data) => {
        console.log(data);
      };
  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
              validate: {
                checkLength: (value) => value.length >= 6,
                matchPattern: (value) =>
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    value
                )
            }
            })}
          />
          {errors.password?.type === "required" && (
    <p className="errorMsg">Password is required.</p>
)}
{errors.password?.type === "checkLength" && (
    <p className="errorMsg">
    	Password should be at-least 6 characters.
    </p>
)}
{errors.password?.type === "matchPattern" && (
    <p className="errorMsg">
    	Password should contain at least one uppercase letter, lowercase
letter, digit, and special symbol.
    </p>
)}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
          <button>reset</button>
        </div>
      </form>
      <hr/>
      <h3>[]</h3>
    </div>
  )
}
