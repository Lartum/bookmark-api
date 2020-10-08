import React from 'react'
import { Button,Row, Col } from 'antd'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <Row>
        <Col span={8} offset={8}>  
        <h1>Bookmark Api</h1>
        <Button><Link to='/bookmark'>Bookmark</Link></Button>
        <Button><Link to='/tag'>Tag</Link></Button>
        <Button><Link to='/display'>Display</Link></Button>
        </Col>  
        </Row>
    )

}

export default Home