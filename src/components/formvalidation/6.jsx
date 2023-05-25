import React,{useState,useEffect,useRef} from 'react';
import { useForm } from "react-hook-form";

const initialValues = {
    gender: "male",
    skills: {
      JavaScript: false,
      react: false,
      nodejs: false,
      angular: false
    }
  };

export default function CustomFormHooks() {

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        defaultValues: {
          gender: initialValues.gender,
          skills: Object.keys(initialValues.skills).filter(
            (item) => initialValues.skills[item] === false
          )
        }
      });
    
      const onSubmit = (data) => {
        console.log(data);
      };

    return(
        <>
         <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3" controlId="email">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Please enter a valid email"
              }
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div className="mb-3" controlId="gender">
          <label>Select Gender</label>
          <input
            type="radio"
            label="Male"
            value="male"
            {...register("gender", {
              required: "Please select your gender"
            })}
          />
          <input
            type="radio"
            label="Female"
            value="female"
            {...register("gender")}
          />
          {errors.gender && <p className="errorMsg">{errors.gender.message}</p>}
        </div>
        <div className="mb-3" controlId="skills">
          <label>Select Your Skills</label>
          <input
            type="checkbox"
            label="JavaScript"
            value="JavaScript"
            {...register("skills", {
              required: "Please select at-least one skill"
            })}
          />
          <input
            type="checkbox"
            label="React"
            value="react"
            {...register("skills")}
          />
          <input
            type="checkbox"
            label="Node.js"
            value="nodejs"
            {...register("skills")}
          />
          <input
            type="checkbox"
            label="Angular"
            value="angular"
            {...register("skills")}
          />
          {errors.skills && <p className="errorMsg">{errors.skills.message}</p>}
        </div>
        <label></label>
        <button type="submit" variant="primary">
          Submit
        </button>
      </form>
        </>
    )
}