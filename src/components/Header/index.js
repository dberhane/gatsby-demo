import React from 'react'
import Link from 'gatsby-link'
import banner from './ad001.gif'
import logo from './bmjopen-logo.png'

import { Advertisement, Menu, Button, Image, Container, Segment } from 'semantic-ui-react'

const Header = () => (
  <div>
   
      <Advertisement as={Image} centered unit='Mobile leaderboard' fluid style={{marginTop:'1.0em', marginBottom:'5em'}}>
        <Link to={'/posts'}><Image src={banner} alt="banner" fluid style={{minHeight: 95}} /></Link>
      </Advertisement>

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
