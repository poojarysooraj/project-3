import React from 'react'
 import { Link, useParams } from 'react-router-dom';
 import {Row,Col,Image,ListGroup,Button,Card} from 'react-bootstrap'
import products from '../../products';
import Rating from '../Rating';
//  import Rating from './Rating'
// function productscren({match}) {
//   const {id} = useParams();
//   console.log(id)

//   // const product= products.find((p)=>p._id ==match.id)
//   // return (
//   //   <div>
//   //     <link to="/" className="btn btn-dark my-3">go back</link>
//   //     <Row>
//   //     <Col md={6}>
//   //       <Image src={product.image} alt={product.name}></Image>
//   //     </Col>
//   //   </Row>
//   //   </div>
    
//   // )
// }

// export default productscren


export default function Productscren() {

  const {id} = useParams();
  console.log(id)

  const product= products.find((p)=>p._id === id)
  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">go back</Link>
      <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name}></Image>
      </Col>
      <Col md={3}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
             <Rating
             value={product.rating}
             text={`${product.numReviews}reviews`}
             color={'red'}
             />

          </ListGroup.Item>
          <ListGroup.Item>
          price:${product.price}
          </ListGroup.Item>
          <ListGroup.Item>
            Description:{product.description}
          </ListGroup.Item>
        </ListGroup>
      
      </Col>
      <Col md={3}>
        <Card>
        <ListGroup variant="flush">
        <ListGroup.Item>
           <Row>
            <Col>price:</Col>
            <Col>
            <strong>${product.price}</strong>
            </Col>
           </Row>
          </ListGroup.Item>
          <ListGroup.Item>
           <Row>
            <Col>Status:</Col>
            <Col>
            {product.countInStock >0? "In Stock": "Out of stock"}
            </Col>
           </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            
          </ListGroup.Item>
          <Button className="btn-block" disabled={product.countInStock===0} type='button'>Add to Cart</Button>
        </ListGroup>
        </Card>
      </Col>
     
    </Row>
    {product.name}
    </div>
    
  )
}

 