import React, { useState, useEffect } from 'react';
import Banner from '../components/banner';
import { useParams } from "react-router-dom";

export default function About() {
  const [users, setUsers] = useState([]);
  const [customFields, setCustomFields] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);

  const {name1} = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch('../db.json');
      const data = await res.json();
      setCustomFields(data);  
    })();
  }, []);

  const getDataTwo = () => {
    fetch('http://localhost:3000/customer',{
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(function(response){
      console.log('response',response)
      return response.json();
    })
    .then(function(myJson) {
      console.log('response 2',myJson);
      setCustomFields(myJson)
    })
  }

  useEffect(() => {
    getDataTwo()
  },[])

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');  
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    getData()
  },[])

  const btnDel  =(id) => {
    const newData = users.filter((val) => val.id !== id)
    setUsers(newData)
  }

  const getDatafinal = () => {
    fetch('http://localhost:3000/posts',{
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(function(response){
      console.log('final response 1',response)
      return response.json();
    })
    .then(function(myJson) {
      console.log('final response 2',myJson);
      setPosts(myJson)
    })
  }

  useEffect(() => {
    getDatafinal();
  }, []);
  return (
    <div className='content'>
      <Banner bannerTitle="About" bannerDesc="Lorem Ipsum"/>
      <h2>This is {name1}</h2>
      {/* <button onClick={getData}>Click to call api data</button> */}
      {/* {users.map((val) => {
        return(
          <div key={val.id}>
            <h3>{val.name}</h3>
            <button onClick={() => btnDel(val.id)}>&times;</button>
          </div>
        )
      })} */}

      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <span>{post.id}</span> {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
      <h1>Search Filter</h1>
      <hr />
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search anything"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="card bg-light shadow">
        <div className="card-body">
        {users.length > 0 ? (
            users
              .filter((cf) => {
                if (searchTerm === '' || searchTerm.trim() === '') {
                  return cf;
                } else if (
                  cf.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return cf;
                }
              })
              .map((cf) => (
                <div className="card mb-3" key={cf.id}>
                  <div className="card-body">
                    <p className="card-text fw-bold">
                      CF Name:{' '}
                      <span className="text-primary text-capitalize">
                        {cf.name}
                      </span>
                    </p>
                    <button onClick={() => btnDel(cf.id)}>&times;</button>
                  </div>
                </div>
              ))
          ) : (
            <p className="text-center text-secondary small m-0">
              No Custom Fields Data!
            </p>
          )}
        {/* {customFields.length > 0 ? (
            customFields
              .filter((cf) => {
                if (searchTerm === '' || searchTerm.trim() === '') {
                  return cf;
                } else if (
                  cf.field_name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return cf;
                }
              })
              .map((cf) => (
                <div className="card mb-3" key={cf.id}>
                  <div className="card-body">
                    <p className="card-text fw-bold">
                      CF Name:{' '}
                      <span className="text-primary text-capitalize">
                        {cf.field_name}
                      </span>
                    </p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        className="me-2"
                        width="30"
                        src={cf.user_icon}
                        alt="user icon"
                      />
                      <p className="m-0 small text-capitalize">
                        {cf.user_name}
                      </p>
                    </div>
                    <p className="m-0 text-secondary small">
                      {cf.created_string}
                    </p>
                  </div>
                </div>
              ))
          ) : (
            <p className="text-center text-secondary small m-0">
              No Custom Fields Data!
            </p>
          )} */}
        </div>
      </div>
    </div>
  )
}
