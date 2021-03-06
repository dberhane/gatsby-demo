import React, { Component } from "react";
import Link from "gatsby-link";

import { Button, Header, Grid, Image, Segment, Container, Item, Divider } from 'semantic-ui-react'

import BlogRoll from '../components/BlogRoll'
import MostRead from '../components/MostRead'
import Categories from '../components/Categories'

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const IndexPage = ({ data, pathContext }) => {
    const { group, index, first, last, pageCount } = pathContext;
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    console.log(data)
    console.log(pathContext)

    return (
        <Grid container stackable columns={2} style={{marginTop:'1.5em'}}>

            <Grid.Column width={12}>

                <Header as='h1'>Latest blogs</Header>

                <Item.Group>
                    {group.map(({ node }) => (
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

                <Segment basic clearing>
                    <Button basic color='blue' floated='left'><Button.Content><NavLink test={first} url={"/" + previousUrl} text="Previous Page" /></Button.Content></Button>
                    <Button basic color='blue' floated='right'><Button.Content><NavLink test={last} url={"/" + nextUrl} text="Next Page" /></Button.Content></Button>
                </Segment>
            </Grid.Column>

            <Grid.Column width={4}>
                <Categories categories={data}/>
                <BlogRoll />
                <MostRead gdata={data} gsite={0} ghead='BMJ Open most read'/> 
            </Grid.Column>

        </Grid>
    );
};
export default IndexPage;


export const query = graphql`
  query allmostReadFeed {
    allDataJson (filter: {id: {regex: "/.*bmjopen-last30days/"}}) {
      edges {
        node {
          bmjsiteHead {
            id
            accountId
            webPropertyId
            name
            websiteUrl
          }
          bmjsiteData {
            pagePath
            pageTitle
            pageviews
          }
        }
      }
    }

    allWordpressCategory {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
  }
`