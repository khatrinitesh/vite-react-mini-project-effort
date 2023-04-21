import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import styled from "styled-components";


export default function Home() {

  const [count,setCount] = useState(0)
  const [text,setText] = useState(false);

  const btnInc =() => {
    setCount(count => count + 1)
  }
  const btnDec =() => {
    setCount(count => count - 1)
  }
  const btnReset =() => {
    setCount(0)
  }

  const btnToggle= () => {
    setText(!text);
  }

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.$primary ? "palevioletred" : "white"};
    color: ${props => props.$primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;


  return (
    <div className='content'>
      <Banner bannerTitle="Home" bannerDesc="Lorem Ipsum"/>
      <div className='count_block border-bottom p-3'>
        <p>{count}</p>
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnReset}>Reset</button>
      </div>
      <div className='toggle_block border-bottom p-3'>
        <p>{text ? 'yes' : 'no'}</p>
        <button onClick={btnToggle}>Click toggle {text ? 'yes' : 'no'}</button>
      </div>
      <div className='styled_components border-bottom p-3'>
        <Title>Heading title</Title>
        <Button>Normal</Button>
        <Button $primary>Primary</Button>
        <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>
      </div>
    </div>
  )
}
