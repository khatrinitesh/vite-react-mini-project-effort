import React, { useState, useEffect } from 'react';

export default function CustomApp() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts,setPosts] = useState([])

 // GET with Axios
    useEffect(() => {
        const fetchPost = async () => {
        let response = await client.get('?_limit=10');
        setPosts(response.data);
        };
        fetchPost();
    }, []);

    const deletePost = async (id) => {
        await client.delete(`${id}`);
        setPosts(
           posts.filter((post) => {
              return post.id !== id;
           })
        );
     };
  
      // Post with Axios
   const addPosts = async (title, body) => {
    let response = await client.post('', {
       title: title,
       body: body,
    });
    setPosts((posts) => [response.data, ...posts]);
 };

    const handleSubmit = (e) => {
        e.preventDefault()
        addPosts(title,body)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
             <textarea name="" className="form-control" id="" cols="10" rows="8" 
               value={body} onChange={(e) => setBody(e.target.value)} 
            ></textarea>
            <button type="submit">Add Post</button>
      </form>
    </div>
  )
}


