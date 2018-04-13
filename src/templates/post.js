import React, { Component } from "react"
import PropTypes from "prop-types"

import { Button, Header, Grid, Segment, Container } from 'semantic-ui-react'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Grid container>
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
