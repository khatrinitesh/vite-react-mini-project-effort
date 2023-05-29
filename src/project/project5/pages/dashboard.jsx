import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

export default function Dashboard({logout}) {
  return (
    <div>
        <p>Welcome User </p>
        <Link to="settings">Settings</Link>
        <Outlet/>
        <button onClick={logout}>Logout</button>
    </div>
  )
}
