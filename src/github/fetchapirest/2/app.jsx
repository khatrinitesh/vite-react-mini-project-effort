import React, { useState,useEffect } from 'react';
import moment from 'moment';


const PostsStyle = {
    background: "rgb(243, 154, 148)",
    margin: "0 auto",
    width: "50%",
    padding: 10,
    boxShadow: "10px 10px 5px #888888"
  };
  const listStyle = {
    listStyle: "none",
    padding: 10
  };

  const dataStyle = {
    color: "#777777",
    float: "left"
  }
  const userStyle = {
    color: "#777",
    float: "right"
  }

export default function CustomApp(){

    const [posts,setPosts] = useState([])

    useEffect(() => {
        const fetchData = () => {
            fetch("https://jsonplaceholder.typicode.com/posts/")
            .then(response => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error("Server don't load !");
              }
            })
            .then(responseData => {
              setPosts(responseData)
            });
        }
        fetchData()
    },[])

   

      const postsdata = posts.map((post) => {
        return(
            <li key={post.id} style={listStyle}>
                <a href={post.link} style={{textDecoration:"none",color:'black'}}>
                    - <h3>{post.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: post.body }} /> 
                    <span style={dataStyle}>
                        Scritto il: {moment(post.date).format('DD/MM/YYYY')}
                    </span> 
                    <span style={userStyle}>ID User: {post.userId}</span>
                </a>
            </li>
        )
      })

    return (
      <div className="Post" style={PostsStyle}>
         <h1 style={{ textAlign: "center" }}>Last News</h1>
         <ul>
          {postsdata}
        </ul> 
      </div>
    )
}
