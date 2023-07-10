import React from 'react'

function WithAuth(WrappedComponent){
    return function Finally(props){
        const [isLoggedIn, setIsLoggedIn] = useState(false);

        useEffect(() => {
            // Check if the user is logged in
            const isLoggedIn = true; // Replace with actual authentication logic
            setIsLoggedIn(isLoggedIn);
          }, []);

          if(!isLoggedIn){
            return <p>You must be logged in to access this content.</p>
          }
          return <WrappedComponent {...props}/>
    }
}
function Component(){
    return <p>This is protected content that requires authentication.</p>;
}

export default WithAuth(Component)