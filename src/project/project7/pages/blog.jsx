import React from 'react';
import { useParams } from 'react-router-dom';

export default function Blog() {

    const routeParams = useParams();
  return (
    <div>
        <h1>This is a product page for product {routeParams} </h1>
    </div>
  )
}
