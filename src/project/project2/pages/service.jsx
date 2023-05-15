import React,{useState ,useEffect} from 'react';
import Banner from '../components/banner';
import Item from '../components/item';
import axios from 'axios';


export default function Service() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState('')
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async() => {
    setLoading(true)
      try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!res.ok){
          throw new Error('sorry something went wrong')
        }
        const data = await res.json()
        setProducts(data)
        setLoading(false)
      }
      catch(error){
        setError(error.message)
        setLoading(false)
      }
  };

  const btnRemove  =(id)=>{
    const newList = products.filter((val) => val.id !== id)
    setProducts(newList)
  }

  if(loading){
    return(
      <div>loading....</div>
    )
  }

  if(error){
    return(
      <div>{error}</div>
    )
  }

  return (
    <div className='content'>
      <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum"/>
      {products.map((val) => {
        return(
          <div key={val.id}>
            <h2>{val.id}</h2>
            <h3>{val.title}</h3>
            <p>{val.body}</p>
            <button onClick={() => btnRemove(val.id)}>&times;</button>
          </div>
        )
      })}
      {/* <Item title={title} body={body} btnRemove={btnRemove}/> */}
    </div>
  )
}
