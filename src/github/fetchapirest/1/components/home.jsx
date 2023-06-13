import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <div className="row justify-content-center mb-3">
            <div className="col-md-12 text-center">
                <h3>React logo</h3>
                <h2 className="font-weight-bold">Home</h2>
                <h4 className="font-weight-bold text-primary">ReactJs Router with Fetch Rest API</h4>
            </div>
            <div className="col-md-4 mt-5">
                <Link to="/posts">
                    <div className="card card-outline bg-secondary translate-up ripple ripple-dark">
                        <div className="card-body text-center">
                            <h5 className="font-weight-bold">Posts</h5>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-md-4 mt-5">
                <Link to="/users">
                    <div className="card card-outline bg-secondary translate-up ripple ripple-dark">
                        <div className="card-body text-center">
                            <h5 className="font-weight-bold">Users</h5>
                        </div>
                    </div>
                </Link>
            </div>                        
        </div>
    </div>
    </>
  )
}
