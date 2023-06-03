import React from 'react';
import {Card,CardGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class Cards extends React.Component{
    state={
        name:'rajdeep singh',
        love:'coding',
        earn:'null'
    }
    
    render(){
        return  (
            <>
            <h3>CardName</h3>
            <CardGroup className='m-3'>
                    <Card>
                        <Card.Img  variant="top" style={{width:'100%',height:'400px', margin:'auto'}} src="https://source.unsplash.com/daily"/>
                        <Card.Body>
                            <Card.Title>Card title here babby.. </Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link to={{pathname:'/read',state:this.state}}> 
                                <Card.Link  >Read More</Card.Link>
                            </Link>
                        </Card.Footer>
                    </Card>
              </CardGroup>
            </>
        )
    }
}
