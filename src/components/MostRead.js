import React from "react"
import Link from "gatsby-link"
import { List, Header } from "semantic-ui-react"
class MostRead extends React.Component {

    render () {

        const gsite = this.props.gsite ? this.props.gsite : 0
        console.log(gsite)
        const mostReadItems = this.props.gdata.allDataJson.edges[gsite].node.bmjsiteData
        const websiteUrl = this.props.gdata.allDataJson.edges[gsite].node.bmjsiteHead[0].websiteUrl
        console.log(this.props.gdata.allDataJson.edges[1])
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