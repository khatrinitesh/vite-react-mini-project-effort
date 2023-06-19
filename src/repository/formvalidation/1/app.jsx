import React from 'react';
import {useForm} from 'react-hook-form';

export default function CustomApp() {

    const {register,handleSubmit,formState:{errors}} = useForm();

    const onSubmit = (data) => {
        console.log('data',data)
    }
  return (
    <div>
      <div style={{marginTop:'30px'}}>
        {console.log('errors',errors)}
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <input placeholder="Enter name" {...register("fname",{required:true})}/>
            {errors.firstName && <p role="alert">Name is required</p>}
            </div>
            <div>
            <input type="number" placeholder='Enter Age' {...register("age", {required:true, max:20})}/>
            {errors.age?.type == "required" && <p role="alert">Age is required</p>}
            {errors.age?.type == "max" && <p role="alert">Max age should 20</p>}
            </div>
            <div>
            <input placeholder='Enter Email' {...register("email", {required:true, pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}/>
            {errors.email?.type== "required" && <p role="alert">Email is required</p>}
            {errors.email?.type=="pattern" && <p role="alert">Email is Invalid</p>}
            </div>
            <input type="submit" />
        </form>
      </div>
    </div>
  )
}


