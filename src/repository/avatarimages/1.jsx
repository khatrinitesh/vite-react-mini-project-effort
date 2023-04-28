import React from 'react'

export default function AvatarImagesExample() {
  return (
    <>
      <Example/>
    </>
  )
}


function Example(){

    const ImgStyles = {
        borderRadius:'10px'
    }

    return(
        <>
        <div className="thumbnail">
            <img style={ImgStyles} src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg"/>
        </div>
        </>
    )
}