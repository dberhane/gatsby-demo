import React from 'react'
import Link from 'gatsby-link'
import banner from './ad001.gif'
import logo from './bmjopen-logo.png'

import { Advertisement, Menu, Button, Image, Container, Segment } from 'semantic-ui-react'

const Header = () => (
  <div>
   
        <Link to={'/posts'}><Image centered src={banner} alt="banner" bordered fluid style={{ maxHeight:90, maxWidth:728, marginTop:"1em"}} /></Link>


    <Menu pointing size='large' color='purple' inverted stackable>
      <Container>
        <Menu.Item><Link to={'/posts'}><img src={logo} alt="Logo" style={{ width: '12.0em' }} /></Link></Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item position='right'><Link to={'/posts'}>BMJ Open blogs</Link></Menu.Item>
          <Menu.Item position='right'>About us</Menu.Item>
          <Menu.Item position='right'>Topic Index</Menu.Item>
          <Menu.Item position='right'>Home</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  </div>
)

export default Header
