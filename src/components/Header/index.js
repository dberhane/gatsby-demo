import React from 'react'
import Link from 'gatsby-link'
import Banner from './ad001.gif'
import logo from './bmjopen-logo.png'

import { Advertisement, Menu, Button, Image, Container } from 'semantic-ui-react'

const Header = () => (

  <Menu pointing size='large' color='purple' inverted stackable>
  <Container>
    <Menu.Item><Link to={'/posts'}><img src={logo} alt="Logo" style={{width:'12.0em'}}/></Link></Menu.Item>
    <Menu.Menu position='right'>  
    <Menu.Item  position='right'><Link to={'/posts'}>BMJ Open blogs</Link></Menu.Item>
    <Menu.Item  position='right'>About us</Menu.Item>
    <Menu.Item  position='right'>Topic Index</Menu.Item>
    <Menu.Item  position='right'>Home</Menu.Item>
   </Menu.Menu>
   </Container>
  </Menu>

)

export default Header
