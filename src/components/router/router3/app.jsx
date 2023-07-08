import React,{ useState } from 'react';
import { BrowserRouter as Router,Route,Routes,Link, useParams,Outlet } from 'react-router-dom';
import { Data } from './data';
// const users = [
//     { id: '1', fullName: 'Robin Wieruch' },
//     { id: '2', fullName: 'Sarah Finnley' },
//   ];

export default function CustomApp() {

    const [data,setData] = useState(Data);
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="users" element={<Users users={data}/>}>
                <Route path="/users/:id" element={<User/>}/>
            </Route>
            <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  )
}


function Layout(){
    return(
        <>
        <Navbar/>
        <div className='main_content'>
            <Outlet/>
        </div>
        </>
    )
}


function Navbar(){
    return(
        <>
         <nav>
            <Link to="/home">Home</Link>
            <Link to="/users">Users</Link>
        </nav>
        </>
    )
  }

function Home(){
    return(
        <>
         Home
        </>
    )
}

  const Users = ({users}) => {
    return(
        <div className='content'>
            <h2>Users</h2>
            <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <Link to={user.id}>
                        {user.title}
                    </Link>
                </li>
            ))}
            <Outlet/>
            </ul>
        </div>
    )
  }

  const User= () => {
    const {id}  = useParams();
    return(
        <>
         <h2>User: {id}</h2>
         <Link to="/users">Back to Users</Link>
        </>
    )
  }

  
  function NoMatch(){
    return(
        <>No Match</>
    )
  }

