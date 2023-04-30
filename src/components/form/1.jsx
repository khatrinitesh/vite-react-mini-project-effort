import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";




export default function FormExample() {
  return (
    <>
        <Example/>
    </>
  )
}


function Example(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function postData(e){
        e.preventDefault();
        const data = {name,email,password}

        let requestOpt = {
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }
        console.log(data)
        return await fetch('')
    }
    return(
        <></>
    )
}

// function Example(){
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const onSubmit = (data) => {
//         console.log(data);
//     }
//     return(
//         <>
//          <div>
//         <Form onSubmit={handleSubmit(onSubmit)} className='form_block'>
//           <Form.Field>
//                     <label>First Name</label>
//                     <input
//                         placeholder='First Name'
//                         type="text"
//                         {...register("firstName", { required: true, maxLength: 10 })}
//                     />
//                     {errors.firstName && <p className="text-error">Please check the First Name</p>}
//                 </Form.Field>
                
//                 <Form.Field>
//                     <label>Last Name</label>
//                     <input
//                         placeholder='Last Name'
//                         type="text"
//                         {...register("lastName", { required: true, maxLength: 10 })}
//                     />
//                     {errors.lastName && <p className="text-error">Please check the Last Name</p>}
//                 </Form.Field>
//                 <Form.Field>
//                     <label>Email</label>
//                     <input
//                         placeholder='Email'
//                         type="email"
//                         {...register("email",
//                             {
//                                 required: true,
//                                 pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//                             })}
//                     />
//                     {errors.email && <p className="text-error">Please check the Email</p>}
//                 </Form.Field>
//                 <Form.Field>
//                     <label>Password</label>
//                     <input
//                         placeholder='Password'
//                         type="password"
//                         {...register("password", {
//                             required: true,
//                             pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
//                         })}
//                     />
//                     {errors.password && <p className="text-error">Please check the Password</p>}
//                 </Form.Field>
//                 <Button type='submit'>Submit</Button>
//         </Form>
//     </div>
//         </>
//     )
// }