import React,{ useState,useEffect } from 'react'

export default function CustomApp() {

  return (
    <div>
        <BooksList/>
    </div>
  )
}


const books = [
    { id: "1",
     title: "Learn To Code With JavaScript",
     author: "Darren Jones",
     price: 2260,
     pages: 425,
     cover: "https://m.media-amazon.com/images/I/412KSS+3fjL._SX260_.jpg",
     keywords: ["coding", "javascript", "beginner"]
   },
    { 
      id: "2",
     title: "JavaScript: The Definitive Guide",
     author: "David Flanagan",
     price: 2399,
     pages: 708,
     cover: "https://m.media-amazon.com/images/I/51wijnc-Y8L._SX260_.jpg",
     keywords: ["rhino", "javascript", "mastery"]
   },
    { 
      id: "3",
     title: "Eloquent JavaScript",
     author: "Marijn Haverbeke",
     price: 1994,
     pages: 474,
     cover: "https://m.media-amazon.com/images/I/51-5ZXYtcML.jpg",
     keywords: ["eloquent", "javascript", "modern"]
   },
  ]

function BooksList(){

    const [data,setData]  = useState(books)

    function handleRemove(id) {
        const newList = data.filter((item) => item.id !== id);
        setData(newList);
      }
    return(
        <>
        <h1>Books</h1>
         <ul>
            {data.map((val) => {
                const {title,id,cover,price,pages} = val
                return(
                    <Books key={id} title={title} cover={cover} price={price} pages={pages} btnDel={handleRemove}/>
                )
            })}
         </ul>
        </>
    )
}

function Books({id,title,cover,price,pages,btnDel}){
    return(
        <>
         <li key={id}>
            <h2>{title}</h2>
            <img alt={`cover of ${title}`} src={cover} />
            <p>{price}</p>
            <p>{pages}</p>
            <button onClick={btnDel(id)}>&times;</button>
        </li>
        </>
    )
}
