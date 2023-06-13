import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Posts(){

    const nav = useNavigate();
    const [posts,setPosts] = useState([])

    const btnBack = () => {
        nav("/");
    }

    useEffect(() => {
        const fetchData = () => {
            fetch('http://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                console.log(setPosts(data))
            })
        }
        fetchData()
    }, [])
    return (
      <>
         <div>
            <div className="row mb-3">
                <div className="col-md-12 text-md-center">
                    <h2 className="text-poppins font-weight-bold">Posts</h2>
                    <button onClick={btnBack} className='btn btn-primary'>Back</button>
                </div>
            </div>
            <div className="row justify-content-center">
                {posts.map((post) => (
                    <div className="col-md-8">
                    <div className="card card-outline translate-up mb-3">
                        <div className="card-body">
                            <h5 className="card-title"><strong className="text-primary">{post.userId}</strong> | {post.title}</h5>
                            <h6 className="body-1 text-muted">{post.body}</h6>
                        </div>
                        <div className="card-footer text-right">
                            <h6 className="subtitle-1 text-muted">Hace 1 min.</h6>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
      </>
    )
}
