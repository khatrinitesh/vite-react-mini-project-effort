import React from 'react'
import ReactDOM from 'react-dom/client'
import AppExample from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <Auth0Provider
    domain="dev-ywo84tk04gj3t6e6.us.auth0.com"
    clientId="HiqI1WnqAHQYClb3kJbPZMoJYVwdCgBN"
    redirect_uri={window.location.origin}
  >
    <AppExample />
  </Auth0Provider>
  </>,
)
