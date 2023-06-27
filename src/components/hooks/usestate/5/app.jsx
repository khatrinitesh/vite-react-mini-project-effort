import React,{useState} from 'react'

export default function CustomApp() {
    const [name, setName] = useState('CronJ');

    const [mobile, setMobile] = useState(8871887171);
   
    const [address, setAddress] = useState({ street: '#1284, 14th Main Road, 7th Cross Road', landMark: 'Near House of common', city: 'Bangalore', country: 'Bangalore'});

    const handleChange  =() => {
        setName('nitesh')
        setMobile(1234567890)
        setAddress({street:'lorem ipsum',landMark:'near house of common',city:"usa",country:'usa'})
    }
  return (
    <div>
      {name}
      <br/>
      {mobile}
      <br/>
      {address.street} - {address.landMark} - {address.city}

      <button onClick={handleChange}>Change some text object</button>
    </div>
  )
}
