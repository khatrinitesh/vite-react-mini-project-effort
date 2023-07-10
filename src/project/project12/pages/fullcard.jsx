import React from 'react';
import { useParams } from 'react-router-dom';

export default function FullCard({data}) {
    const {title} = useParams();
  return (
    <section className='full'>
      <div className='container'>
            {data.filter(card => card.title === title).map((card,index) => {
                <div key={index} className='fullCard'>
                    <h1>{card.title}</h1>
                    <p>{card.desc}</p>
                </div>
            })}
      </div>
    </section>
  )
}
