import React, { Component } from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import { Button, Header, Grid, Segment, Container, Item } from 'semantic-ui-react'

import BlogRoll from '../components/BlogRoll'
import Categories from '../components/Categories'
class PostTemplate extends Component {
  render() {
    const posts = this.props.data.allWordpressPost.edges
console.log(this.props)
    return (
      <Grid container stackable columns={2} style={{marginTop:'1.5em'}}>

      <Grid.Column width={12}>

          <Header as='h1'>Latest blogs: {this.props.pathContext.name}</Header>

          <Item.Group>
              {posts.map(({ node }) => (
                  <Item key={node.id} className={"post"} style={{ marginBottom: 50 }}>
                      <Item.Content>
                          <Item.Header as='h2'>
                              <Link to={'/post/' + node.slug}>
                                  {node.title}
                              </Link>
                          </Item.Header>
                          <Item.Description className={"post-content"} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                          <Item.Extra>
                              {node.date}
                          </Item.Extra>
                      </Item.Content>
                  </Item>
              ))}

          </Item.Group>

      </Grid.Column>


  </Grid>

    )
  }
}
//<img src={post.image.sizes.thumbnail} />

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array
}

export default PostTemplate

export const pageQuery = graphql`
  query currentCategoryQuery($name: String!) {
    allWordpressPost(filter:{categories: {name: {eq:$name}}}) {
      edges {
        node {
          id
          date
          modified
          slug
          title
          excerpt
          categories {
            id
            name
            slug
          }
        }
      }
    }

  }
`
