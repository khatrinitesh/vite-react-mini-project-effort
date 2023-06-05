import React,{useState,useEffect} from 'react'

export default function BuidlingFormExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){

    return(
        <>
         <form className="demoForm">
            <h2>Sign up</h2>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control"
                name="email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control"
                name="password" />
            </div>
            <button type="submit" className="btn btn-primary">
                Sign up
            </button>
        </form>
        </>
    )
}

// function Example(){
//     const [resultdata,updateContacts] = useState([]);

//     const addContact = (contact) => {
//         updateContacts([...resultdata,contact])
//     }
//     return(
//         <>
//          <ContactForm addContact={addContact}/>
//          <ContactList resultdata={resultdata}/>
//         </>
//     )
// }

// function ContactForm({addContact}){

//     const [formData,setFormData] = useState({
//         id:"",
//         name:"",
//         location:"",
//         mobile:"",
//         salary:""
//     });

//     function handleChange(e){
//         setFormData({
//             ...formData,
//             [e.target.name]:e.target.value
//         })
//     }

//     function handleSubmit(e){
//         e.preventDefault();
//         addContact(formData)
//         setFormData({
//             id:"",
//             name:"",
//             location:"",
//             mobile:"",
//             salary:""
//         })
//     }


//     return(
//         <>
//          <form onSubmit={handleSubmit}>
//             <div>
//                 Id <input type="text" name="id" value={formData.id} onChange={handleChange}/>
//             </div>
//             <div>
//                 Name <input type="text" name="name" value={formData.name} onChange={handleChange}/>
//             </div>
//             <div>
//                 Location <input type="text" name="location" value={formData.location} onChange={handleChange}/>
//             </div>
//             <div>
//                 Mobile <input type="text" name="mobile" value={formData.mobile} onChange={handleChange}/>
//             </div>
//             <div>
//                 Salary <input type="text" name="salary" value={formData.salary} onChange={handleChange}/>
//             </div>
//             <button>Submit</button>
//          </form>
//         </>
//     )
// }

// function ContactList({resultdata}){
//     return(
//         <>
//          {resultdata.map((val) => {
//             return(
//                 <div className='card' key={val.id}>
//                     <h3>{val.id}</h3>
//                     <h3>{val.name}</h3>
//                     <h3>{val.location}</h3>
//                     <h3>{val.mobile}</h3>
//                     <h3>{val.salary}</h3>
//                 </div>
//             )
//          })}
//         </>
//     )
// }

// function ContactForm({addContact}){

//     const [contactInfo,setContactInfo] = useState({
//         id:"",
//         name:"",
//         location:"",
//         salary:""
//     })

//     const changeHandler = (e) => {
//         setContactInfo({
//             ...contactInfo,
//             [e.target.name]:e.target.value
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         addContact(contactInfo)
//         setContactInfo({
//             id:"",
//             name:"",
//             location:"",
//             salary:""
//         })
//     }

//     return(
//         <>

//          <form onSubmit={handleSubmit}>
//             <p>
//                 <label>
//                     Employee ID : <input type="text" name="id"  value={contactInfo.id}  onChange={changeHandler} />
//                 </label>
//             </p>
//             <p>
//                 <label>
//                     Name : <input type="text" name="name"  value={contactInfo.name}  onChange={changeHandler} />
//                 </label>
//             </p>
//             <p>
//                 <label>
//                     Location : <input type="text" name="location"  value={contactInfo.location}  onChange={changeHandler} />
//                 </label>
//             </p>
//             <p>
//                 <label>
//                     Salary : <input type="text" name="salary"  value={contactInfo.salary}  onChange={changeHandler} />
//                 </label>
//             </p>
//             <button>Submit Contact</button>
//          </form>
//         </>
//     )
// }

// function UserList({contacts}){
//     return(
//         <>
//          {contacts.map((contact) => {
//             return(
//                 <div className="border-bottom-1 card" key={contact.id}>
//                     <p>{contact.id}</p>
//                     <p className="card-name">{contact.name}</p>
//                     <p>{contact.location}</p>
//                     <p>{contact.salary}</p>
//                 </div>
//             )
//          })}
//         </>
//     )
// }