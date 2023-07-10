import React from 'react';
import Image from './img';

export default function ImgList(props) {
    const results = props.data;

    let imgs = results.map(img => <Image url={img.urls.small} key={img.id}/>)
  return (
    <>
      <ul className='list_bullet'>
        {imgs}
      </ul>
    </>
  )
}
