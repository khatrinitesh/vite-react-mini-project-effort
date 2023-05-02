import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function CharacterCounterExample() {
  return (
    <>
       <Example/>
    </>
  )
}

function Example(){
    const [textAreaCount, setTextAreaCount] = React.useState(0);

    const recalculate = (e) => {
        console.log('event value',e)
        setTextAreaCount(e.target.value.length)
    }


    return(
        <>
         <p> {`Textarea Char Count: ${textAreaCount}`} </p>
         <textarea
            type="text"
            rows={5}
            className="full_height_Width"
            onChange={recalculate}
        />
        </>
    )
}

// function Example(){

//     const [inputText,setInputText] = useState("")
//     const [characterLimit] = useState(30);

//     const handleChange = event => {
//         setInputText(event.target.value);
//       };

//     return(
//         <>
//             <Container>
//             <Row className="justify-content-md-center">
//             <Col xs lg="3">
//                 <Form>
//                 <Form.Group className="mb-3">
//                     <Form.Label>Example textarea</Form.Label>
//                     <Form.Control as="textarea"  rows={3} value={inputText} onChange={handleChange} isInvalid={(inputText.length > characterLimit)} />
//                     <Badge className='mt-3' bg={`${inputText.length > characterLimit ? 'danger' : 'primary'}`}>{inputText.length}/{characterLimit}</Badge>
//                 </Form.Group>
//                 </Form>
//             </Col>
//             </Row>
//         </Container>
//         </>
//     )
// }

// function Example(){
//     const [count, setCount] = useState(0);

//     const handleCount = (e) =>{ 
//         setCount(e.target.value.length)
//     }
//     return(
//         <>
//             <textarea
//                 type="text"
//                 rows={5}
//                 className="full_height_Width"
//                 onChange={handleCount}
//             />
//             <p>{count}</p>
//         </>
//     )
// }



