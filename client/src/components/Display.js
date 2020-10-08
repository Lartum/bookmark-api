import React, {  useState } from 'react'
import { Button, Row, Col, Card } from 'antd'
import axios from 'axios'

const Display = () => {
    const [ view, setView ] = useState(null) 
    const [ apiData, setApiData ] = useState(null)

    const handleClick = async (value) =>{
        setView(value)
        if(view === 'bookmark'){
            try {
                const response = await axios.get('/display/bookmarks')
                console.log(response.data)
                setApiData(response.data)
            } catch (error) {
                console.log(error)   
            }
        } 
        else if(view === 'tag' ) {
            try {
                const response = await axios('/display/bookmarks')
                setApiData(response.data)
            } catch (error) {
                console.log(error)   
            }
        }
    }

  
    return(
        <>
        <Row>
            <Col span={8} offset={8}>
                <h1>Display your Bookmarks and Tags</h1>
                <Button onClick={()=> handleClick('bookmark')}>Display Bookmarks</Button>
                <Button onClick={()=> handleClick('tag')}>Display Tags</Button>
            </Col>  
            </Row>
                { view === 'bookmark' && apiData !== null && apiData.map((data) => 
                <Col>
                <Card title={ data.title} style={{ width:300, marginTop:'25px' }}>
                    <p>id: {data._id}</p>
                    <p>Link: {data.link}</p>
                    <p>publisher: {data.publisher}</p>
                    <p>tags: {data.tags}</p>
                </Card>
                </Col>
                )}    

                { view === 'tag' && apiData !== null && apiData.map((data) => 
                <Col>
                <Card title={ data.title} style={{ width:300, marginTop:'25px' }}>
                    <p>id: {data._id}</p>
                </Card>
                </Col>
                )} 
       </>
    )
}

export default Display