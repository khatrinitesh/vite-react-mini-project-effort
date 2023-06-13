import React,{ useState, useEffect } from 'react';

export const useFetchExample = (url) => {

    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([]);
    const [error,setError] = useState(false);
    

    useEffect(() => {   
        const fetchData = async () => {
            setLoading(true)
            try{
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error('sorry something went wrong')
                }
                const results = await response.json();
                setLoading(false)
                setData(results.data)
                setError(false);
            }
            catch(error){
                setLoading(false)
                setError(error.message)
            }
        }
        fetchData()
    },[url])
    return {loading,data,error}
}


//Take the url through the props 
// export const useFetchExample = (url) => {

//     //React useState Hooks
//     const [loading, setLoading] = useState(true);
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(false);

//     //Fetch the data when app is rendered 
//     useEffect(() => {

//         const getData = async () => {
//             try {
//                 const response = await fetch(url);
//                 const results = await response.json();
//                 setLoading(false)
//                 setData(results.data);
//                 setError(false)
//             } catch (error) {
//                 setLoading(false)
//                 setError(false)
//                 setError(error)
//             }
//         }
//         getData();
//     }, [url]);

//     return {
//         loading,
//         data,
//         error
//     }
// }