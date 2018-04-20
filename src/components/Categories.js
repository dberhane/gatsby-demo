import React, { Component } from 'react';
import Link from 'gatsby-link'
import { List } from "semantic-ui-react"

class Categories extends Component {
    render() {

        console.log(this.props.categories.allWordpressCategory.edges)
        const categories = this.props.categories.allWordpressCategory.edges
         console.log("Test running")
        return (
            <div style={{paddingBottom:'2.5em'}}>
                <h2>Categories</h2>
                <List divided relaxed>
                {categories.map((item, i)=>
                 <List.Item key={item.node.id}><Link to={`category/${item.node.slug}`}>{ item.node.name }</Link></List.Item>) }
                </List>
            </div>
        );
    }
}

export default Categories