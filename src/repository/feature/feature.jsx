import React,{useState} from 'react';
import {featureOne,featureTwo} from './data';
import './style1.css';
import "bootstrap/dist/css/bootstrap.css";
import { FaShoppingBag } from "react-icons/fa";

export default function FeatureExample() {
  return (
    <>
        <Example/>
    </>
  )
}


function Example(){

    const [toggle,setToggle] = useState(false);


    // const btnToggle = () => {
    //     setToggle(!toggle);
    // }

    const [query, setquery] = useState('')
    const [state, setstate] = useState({
          query: '',
          list: []
        })
     const handleChange = (e) => {
        const results = featureTwo.filter(post => {
                if (e.target.value === "") return posts
                return post.title.toLowerCase().includes(e.target.value.toLowerCase())
            })
            setstate({
                query: e.target.value,
                list: results
            })
     }
    return(
        <>
            {/* <div className="features">
                <div className="container">
                    <div className="row">
                    {featureOne.map((val,index) => {
                        return(
                            <div key={index} className="col-lg-3 col-md-6">
                                <a href="#">
                                    <div className="item">
                                        <div className="image">
                                        <img
                                            src={val.icon}
                                            alt=""
                                            style={{ maxWidth: 44 }}
                                        />
                                        </div>
                                        <h4>{val.title}</h4>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div> */}
            <input type="search" value={state.query} onChange={handleChange}/>
            <div className="section trending">
                <div className="container">
                    <div className="row">
            {(state.query === '' ? "No posts match the query" : !state.list.length ? "Your query did not return any results" : state.list.map(post => {
                return (
                <>
                 <div key={post.index} className="col-lg-3 col-md-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html">
                                    <img src={post.avatar} alt="" />
                                </a>
                                <span className="price">
                                <em>{post.oldprice}</em>{post.newprice}
                                </span>
                            </div>
                            <div className="down-content">
                                <span className="category">{post.text}</span>
                                <h4>{post.title}</h4>
                                <a href="product-details.html">
                                    <i className="fa fa-shopping-bag">
                                        <FaShoppingBag/>
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )
              }))}
            
            </div>
                </div>
            </div>

        </>
    )
}