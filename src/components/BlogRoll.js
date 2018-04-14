import React from "react"
import Link from "gatsby-link"

import { Segment, List, Container } from 'semantic-ui-react'

const BlogRoll = () => (
    <Segment padded>
        <List relaxed>
            <List.Item>
                <List.Header as='h2'>BLOGROLL</List.Header>
            </List.Item>

            <List.Item>ALPSP</List.Item>
            <List.Item>CEBM</List.Item>
            <List.Item>COPE</List.Item>
            <List.Item>JISC Managing Research Data programme</List.Item>
            <List.Item>OASPA blog</List.Item>
            <List.Item>Research Information Network</List.Item>
            <List.Item>UK PubMed Central Blog</List.Item>
        </List>

        <List relaxed>
            <List.Item>
                <List.Header as='h2'>Category</List.Header>
            </List.Item>

            <List.Item>BMJ Open editions</List.Item>
            <List.Item>Events</List.Item>
            <List.Item>Instructions to authors</List.Item>
            <List.Item>Open Access</List.Item>
            <List.Item>Open Peer Review</List.Item>
            <List.Item>Research Information Network</List.Item>
            <List.Item>UK PubMed Central Blog</List.Item>
        </List>

    </Segment>
)

export default BlogRoll
