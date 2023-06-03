import React from "react";
import {Card,CardGroup} from "react-bootstrap";
import {Link,  useNavigate, useParams} from "react-router-dom";

function Read() {   
	let location = useNavigate();
	console.log(location);

	const {name,love,earn} = useParams()
	console.log(name);

	return (
		<>
				<Link to="/">
				Back... 
			</Link>
			<CardGroup>
				<Card>
					<Card.Img
						variant="top"
						style={{width: "100%", height: "400px", margin: "auto"}}
						src="https://source.unsplash.com/random"
					/>{" "}
					<Card.Body>
						<Card.Title className="mt-5">Card by read</Card.Title>
						<Card.Text>
							{name}
							{love}
							{earn}
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
						</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
		</>
	);
}

export default Read;
``