import React from 'react'

export default function Products({products}) {
  return (
    <>
      <div className="product-box">
        <h2 className="title"> Products Component</h2>
            <div className="box">
            {Object.entries(products).map(([id, {name,img}]) => (
                    <li key={id}>
                        <Link to={`/product/＄{id}`}>
                            <h2 className="product-name">{name}</h2>
                            <img src={img} alt={name}/>
                        </Link>
                    </li>
                ))} 
            </div>
        </div>
    </>
  )
}
