import React,{useState,useEffect} from 'react'

export default function RefDomExample() {
  return (
    <>
      <QtyIncrement/>
    </>
  )
}

// EXAMPLE 1
class QtyIncrement extends React.Component{

    constructor(props){
        super(props);
        this.qtyInc = React.createRef();
    }

    incrementQuantity = () => {
        this.qtyInc.current.value++;
    }
    decrementQuantity = () => {
        this.qtyInc.current.value--;
    }

    render(){
        return(
            <>
            <input type="text" ref={this.qtyInc}/>
             <button onClick={this.incrementQuantity}>+</button>
             <button onClick={this.decrementQuantity}>-</button>
            </>
        )
    }
}