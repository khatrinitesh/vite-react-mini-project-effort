import React from 'react';
import ImageFilter from 'react-image-filter';
import './custom.scss';

export default function BlackWhiteImageExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
    return(
        <>
         <div className='section_title'>
            <ImageFilter image="https://davidwalsh.name/demo/css-filters.png" filter={ 'invert' } // see docs beneath
                colorOne={ [40, 250, 250] }
                colorTwo={ [250, 150, 30] } />
         </div>
        </>
    )
}