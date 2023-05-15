import React,{useState,useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

export default function FetchRestApiExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){

    const [cell,setCell] = useState([])

    const fetchData = async() => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        setCell(data)
    }

    useEffect(() => {
        fetchData()
    },[])
    return(
        <>
            <table className='table container'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {cell.map((val) => {
                        return(
                            <tr>
                                <td>{val.title}</td>
                                <td>{val.description}</td>
                                <td>{val.price}</td>
                                <td>{val.image}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

// function Example(){

//     const [images,setImages] = useState([])

//     const fetchData = async () => {
//         // const res = await fetch('https://api.unsplash.com/photos/?client_id=QsdzfZp4Vy1y_M_PadgNynNJcfGCJsfaVOvcgcUjhn0')
//         const res = await axios.get('https://api.unsplash.com/photos/?client_id=QsdzfZp4Vy1y_M_PadgNynNJcfGCJsfaVOvcgcUjhn0')
//         const result = await res.data
//         console.log(result);
//         setImages(result)
//     }

//     // useEffect(() => {
            
//     //     fetchData()
//     // },[])
    
//     return(
//         <>
//          <button onClick={fetchData}>Click fetch data</button>
//          {images.length > 0 &&  <Images images={images}/>}
//         </>
//     )
// }

// const Images = ({images}) => {
//     return images.map((data) => {
//         return(
//             <IndividalImage key={data.id} data={data}/>
//         )
//      })
// }

// const IndividalImage = ({data}) => {
//     return(
//         <div className='photo'>
//             <img src={data.urls.small}/>
//             <p>{data.description}</p>
//             <p>{data.promoted_at}</p>
//         </div>
//     )
// }