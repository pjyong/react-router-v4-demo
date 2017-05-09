import React from 'react'
import {RenderRouters,Page} from '../../common/utils'

export default class Detail extends React.Component {
    render(){
        return <Page>
            this is Msg Detail page
            <RenderRouters routes={this.props.routes} />
        </Page>
    }
}
