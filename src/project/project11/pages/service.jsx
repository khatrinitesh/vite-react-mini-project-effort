import React,{ useState ,useEffect} from 'react';
import Banner from '../components/banner';
import axios from 'axios';
import StateLess from '../components/stateless';

export default function Service() {

    const [data,setData] = useState([])
    const fetchData = async () => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(response);
            setData(response.data)
        }
        catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div className='content'>
        <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum"/>
        <StateLess/>
        {data.map((val) => {
            return(
                <div key={val.id}>
                    <h3>{val.title}</h3>
                </div>
            )
        })}
        <hr/>
    </div>
  )
}
