import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const Head = () => {
    return(
        <Menu mode='horizontal' style={{ textAlign:"center"}}>
        <Menu.Item ><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item ><Link to='/bookmark'>Bookmark</Link></Menu.Item>
        <Menu.Item ><Link to='/tag'>Tag</Link></Menu.Item>
        <Menu.Item ><Link to='/display'>Display</Link></Menu.Item>
        </Menu>
    )

}

export default Head