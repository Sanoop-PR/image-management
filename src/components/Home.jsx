import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ImageContainer from './ImageContainer'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
       <Row>
        <Col xs={6} md={4}>
          <Link to={'/imageContainer'}><img src="https://th.bing.com/th/id/OIP.7hzXzb21D7ROjtGMKBJBHgHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" /></Link>
        </Col>
        <Col xs={6} md={4}>
          <ImageContainer/>
        </Col>
        <Col xs={6} md={4}>
          <ImageContainer/>
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
    </div>
  )
}

export default Home