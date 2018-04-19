import React from "react"
import Link from "gatsby-link"
import { List, Header } from "semantic-ui-react"
class MostRead extends React.Component {

    render () {

        const mostReadItems = this.props.gdata.allDataJson.edges[0].node.bmjsiteData
        const websiteUrl = this.props.gdata.allDataJson.edges[0].node.bmjsiteHead[0].websiteUrl
        
        return (
            <div style={{paddingBottom:'2.5em'}}>
              <Header as='h2'>BMJ Open most read</Header>  
              <List ordered divided relaxed>
                  {mostReadItems.map((item,i) => 
                      <List.Item key={item.pagePath}><a href={ `${websiteUrl}${item.pagePath}` }>{item.pageTitle}</a></List.Item>
                  )}
              </List>
            </div>
        )
    }

}

export default MostRead