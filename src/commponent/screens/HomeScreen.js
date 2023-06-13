import React from 'react'
import products from '../../products'
import {Row,Col}from "react-bootstrap"
import Product from '../product'
function HomeScreen() {
  return (
    <div>
      <h1 className="text-center">latest products</h1>
      <Row>
        {products.map((product)=>(
            <Col key={product._id}sm={12} md={6} lg={4} xl={3}>
                {/* <h3>{product.name}</h3> */}
                    <Product product={product}/>
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
