import React,{useState,useEffect} from 'react'

export default function SendingPostAPIExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onTitleChange = e => setTitle(e.target.value);
    const onBodyChange = e => setBody(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const data = { title, body };
        const requestOptions = {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        };
        fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
        .then(response => response.json())
        .then(res => console.log(res));
    };

  return(
    <>
     <form>
          <input  placeholder="Title" value={title}
            onChange={onTitleChange} required />
          <textarea placeholder="Body" value={body}
            onChange={onBodyChange} required />
          <button type="submit" onClick={handleSubmit}>
           Create Post
          </button>
        </form>
     
    </>
  )
}


// function Example(){
//     const [data, setData] = useState([])
//     const [formData, setFormData] = useState({})
  
//     useEffect(() => {
//       fetch('https://jsonplaceholder.typicode.com/users')
//         .then((res) => res.json())
//         .then((result) => setData(result.data))
//         .catch((err) => console.log('error'))
//     }, [])
  
//     const handleChange = (event) => {
//       setFormData({ [event.target.name]: event.target.value })
//     }
  
//     const eventHandler = (event) => {
//       fetch('https://jsonplaceholder.typicode.com/users', {
//         method: 'POST',
//         body: JSON.stringify(formData),
//       })
//         .then((res) => res.json())
//         .then((result) => {
//           console.log(result)
//           setFormData('')
//         })
//         .catch((err) => console.log('error'))
//     }


    
//     return(
//         <>
//          <form>
//             <input name="name" value={formData.name || ''} onChange={handleChange} />
//             <button onClick={eventHandler}>click</button>
//         </form>

//         {data &&
//             data.map((element, index) => (
//             <div name={element.name} key={element.index} />
//             ))}
//         </>
//     )
// }