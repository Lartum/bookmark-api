import React, { useEffect, useState } from 'react'
import { Form, Button, Input, List } from 'antd'
import axios from 'axios'

export const AddBookmark = () =>{
    const [link, setLink] = useState(null)
    const [title, setTitle] = useState(null)
    const [publisher, setPublisher] = useState(null)
    const [ data, setData ] = useState([])

    const handleSubmit = async () =>{
        try {
            let obtainedData = []
            const response = await axios.post('/bookmarks', {
                link,
                title,
                publisher
              }) 
            obtainedData = Object.entries(response.data) 
            setData(obtainedData)
            console.log(obtainedData)
        } catch (error) {
            console.log(error)   
        }
    }

    return(
        <>
        <Form
        initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
        >
        <Form.Item name='link' rules={[{ required:true, message:'please enter the link' }]}>
            <Input placeholder='Link' onChange={(e)=> setLink(e.target.value)}/>
        </Form.Item>
        <Form.Item name='title' rules={[{ required:true, message:'please enter the title' }]}>
            <Input placeholder='Title' onChange={(e)=> setTitle(e.target.value)}/>
        </Form.Item>
        <Form.Item name='publisher' rules={[{ required:true, message:'please enter the publisher name' }]}>
            <Input placeholder='Publisher' onChange={(e)=> setPublisher(e.target.value)}/>
        </Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
        <div style={{ marginBottom:'25px'}}></div>
        <List
         bordered
         dataSource={data}
         renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
         )}
        />
        </>
    )
}

export const DeleteBookmark = () =>{
    const [ bookmarkId, setBookmarkId ] = useState(null)
    const [ data, setData ] = useState([])

    const handleSubmit = async () =>{
        try {
            let obtainedData = []
            const response = await axios({
                method: 'delete',
                url:'/bookmarks',
                data:{
                    bookmarkId
                }
            })
            obtainedData = Object.entries(response.data) 
            setData(obtainedData)
        } catch (error) {
            console.log(error)   
        }
    }

    return(
        <>
        <Form
        initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
        >
        <Form.Item name='bookmarkId' rules={[{ required:true, message:'please enter the id' }]}>
            <Input placeholder='bookmarkId' onChange={(e)=> setBookmarkId(e.target.value)}/>
        </Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
        <div style={{ marginBottom:'25px'}}></div>
        <List
         bordered
         dataSource={data}
         renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
         )}
        />
        </>
    )
    
}

export const AddTag = () =>{
    const [ title, setTagTitle ] = useState(null)
    const [ data, setData ] = useState([])

    const handleSubmit = async () =>{
        try {
            let obtainedData = []
            const response = await axios({
                method: 'post',
                url:'/tags',
                data:{
                    title
                }
            })
            obtainedData = Object.entries(response.data) 
            setData(obtainedData)
        } catch (error) {
            console.log(error)   
        }
    }

    return(
        <>
        <Form
        initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
        >
        <Form.Item name='tagTitle' rules={[{ required:true, message:'please enter the tag title' }]}>
            <Input placeholder='tagTitle' onChange={(e)=> setTagTitle(e.target.value)}/>
        </Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
        <div style={{ marginBottom:'25px'}}></div>
        <List
         bordered
         dataSource={data}
         renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
         )}
        />
        </>
    )
    
}

export const AttachTag = () =>{
    const [ tagTitle, setTagTitle ] = useState(null)
    const [ bookmarkId, setBookmarkId ] = useState(null)
    const [ data, setData ] = useState([])

    const handleSubmit = async () =>{
        try {
            let obtainedData = []
            const response = await axios({
                method: 'put',
                url:'/tags',
                data:{
                    tagTitle,
                    bookmarkId
                }
            })
            obtainedData = Object.entries(response.data) 
            setData(obtainedData)
        } catch (error) {
            console.log(error)   
        }
    }

    return(
        <>
        <Form
        initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
        >
        <Form.Item name='tagTitle' rules={[{ required:true, message:'please enter the tag title' }]}>
            <Input placeholder='tagTitle' onChange={(e)=> setTagTitle(e.target.value)}/>
        </Form.Item>
        <Form.Item name='bookmarkId' rules={[{ required:true, message:'please enter the bookmark Id' }]}>
            <Input placeholder='bookmarkId' onChange={(e)=> setBookmarkId(e.target.value)}/>
        </Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
        <div style={{ marginBottom:'25px'}}></div>
        <List
         bordered
         dataSource={data}
         renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
         )}
        />
        </>
    )
    
}

export const RemoveTag = () =>{
    const [ tagTitle, setTagTitle ] = useState(null)
    const [ bookmarkId, setBookmarkId ] = useState(null)
    const [ data, setData ] = useState([])

    const handleSubmit = async () =>{
        try {
            let obtainedData = []
            const response = await axios({
                method: 'patch',
                url:'/tags',
                data:{
                    tagTitle,
                    bookmarkId
                }
            })
            obtainedData = Object.entries(response.data) 
            setData(obtainedData)
        } catch (error) {
            console.log(error)   
        }
    }

    return(
        <>
        <Form
        initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
        >
        <Form.Item name='tagTitle' rules={[{ required:true, message:'please enter the tag title' }]}>
            <Input placeholder='tagTitle' onChange={(e)=> setTagTitle(e.target.value)}/>
        </Form.Item>
        <Form.Item name='bookmarkId' rules={[{ required:true, message:'please enter the bookmarkId' }]}>
            <Input placeholder='bookmarkId' onChange={(e)=> setBookmarkId(e.target.value)}/>
        </Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
        <div style={{ marginBottom:'25px'}}></div>
        <List
         bordered
         dataSource={data}
         renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
         )}
        />
        </>
    )
    
}

export const DeleteTag = () =>{
    const [ tagTitle, setTagTitle ] = useState(null)
    const [ data, setData ] = useState([])

    const handleSubmit = async () =>{
        try {
            let obtainedData = []
            const response = await axios({
                method: 'delete',
                url:'/tags',
                data:{
                    tagTitle
                }
            })
            obtainedData = Object.entries(response.data) 
            setData(obtainedData)
        } catch (error) {
            console.log(error)   
        }
    }

    return(
        <>
        <Form
        initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
        >
        <Form.Item name='tagTitle' rules={[{ required:true, message:'please enter the tag title' }]}>
            <Input placeholder='tagTitle' onChange={(e)=> setTagTitle(e.target.value)}/>
        </Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
        <div style={{ marginBottom:'25px'}}></div>
        <List
         bordered
         dataSource={data}
         renderItem={item => (
        <List.Item>
          {item}
        </List.Item>
         )}
        />
        </>
    )
    
}

export const ViewBookmark = () =>{
    const [ bookmarkData, setBookmarkData ] = useState([])
    useEffect(() =>{
        const handleSubmit = async () =>{
            try {
                const response = await axios.get('/display/bookmarks')
                console.log(response.data)
                setBookmarkData(response.data)
            } catch (error) {
                console.log(error)   
            }
        }
     return () => handleSubmit()   
    })
    return { bookmarkData }
}

export const ViewTag = () =>{
    const [ tagData, setTagData ] = useState([])
    useEffect(() =>{
        const handleSubmit = async () =>{
            try {
                const response = await axios('/display/tags')
                setTagData(response.data)
            } catch (error) {
                console.log(error)   
            }
        }
     return ()=> handleSubmit()   
    })
    
    return { tagData }
}