import React, { useState } from 'react'
import { Button, Row, Col } from 'antd'
import { AddBookmark, DeleteBookmark } from './InputForm'

const Bookmark = () => {
    const [ operation, setOperation ] = useState(null)

    const handleClick = (value) =>{
        setOperation(value)
    }
    return(
        <Row>
            <Col span={8} offset={8}>
             <h1>Manage Your Bookmarks</h1>   
            <Button onClick = {()=> handleClick('post') }>Add a new Bookmark</Button>
            <Button onClick = {()=> handleClick('delete') }>Delete a Bookmark</Button>
            <div style={{ marginBottom:'25px'}}></div>
            { operation === 'post' &&  <AddBookmark />}
            { operation === 'delete' &&  <DeleteBookmark />}
            </Col>
        </Row>
    )

}

export default Bookmark