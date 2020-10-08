import React, { useState } from 'react'
import { Button, Row, Col } from 'antd'
import { AddTag, AttachTag, RemoveTag, DeleteTag } from './InputForm'

const Tag = () => {
    const [ operation, setOperation ] = useState(null)

    const handleClick = (value) =>{
        setOperation(value)
    }

    return(
        <Row>
        <Col span={10} offset={7}>
         <h1>Manage your tags</h1>   
        <Button onClick={() => handleClick('post')}>Add a tag</Button>
        <Button onClick={() => handleClick('put')}>Attach a tag to a bookmark</Button>
        <Button onClick={() => handleClick('patch')}>Remove a tag from a bookmark</Button>
        <Button onClick={() => handleClick('delete')}>Delete a tag</Button>
        <div style={{ marginBottom:'25px'}}></div>
        { operation === 'post' &&  <AddTag />}
        { operation === 'put' &&  <AttachTag />}
        { operation === 'patch' &&  <RemoveTag />}
        { operation === 'delete' &&  <DeleteTag />}
        </Col>
        </Row>
    )
}

export default Tag