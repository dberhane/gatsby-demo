import React from "react"
import Link from "gatsby-link"

class MostRead extends React.Component {

    render () {
        const mostReadItems = this.props.gdata.allDataJson.edges[0].node.bmjsiteData
        console.log(mostReadItems)
        
        return (
            <div>
              <h2>Most Read Widget</h2>  
              <ul>

                  {mostReadItems.map((item,i) => 
                      <li key={item.pagePath}>{item.pageTitle}</li>
                  )}
              </ul>
            </div>
        )
    }

}

export default MostRead