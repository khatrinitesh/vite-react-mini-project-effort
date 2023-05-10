import React from 'react';
import {featureOne} from './data';
import './style1.css';
import "bootstrap/dist/css/bootstrap.css";

export default function FeatureExample() {
  return (
    <>
        <Example/>
    </>
  )
}


function Example(){
    return(
        <>
            <div className="features">
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
            </div>
        </>
    )
}