import React, { Component } from "react";
import Link from "gatsby-link";

import { Button, Header, Grid, Image, Segment, Container, Item, Divider } from 'semantic-ui-react'

import BlogRoll from '../components/BlogRoll'

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

    console.log(group)

    return (
        <Grid container stackable columns={2}>

            <Grid.Column width={12}>

                <Header as='h1'>Latest blogs</Header>

                <h4>{pageCount} Pages</h4>
                <Item.Group>
                    {group.map(({ node }) => (
                        <Item key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                            <Item.Content>
                                <Item.Header as='h2'>
                                    <Link to={'/posts/post/' + node.slug}>
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
                    <Button basic color='blue' floated='left'><NavLink test={first} url={"/posts/" + previousUrl} text="Previous Page"/></Button>
                    <Button basic color='blue' floated='right'><NavLink test={first} url={"/posts/" + nextUrl} text="Next Page"/></Button>
                </Segment>
            </Grid.Column>  

            <Grid.Column width={4}>
                <BlogRoll />
            </Grid.Column>

        </Grid>
    );
};
export default IndexPage;