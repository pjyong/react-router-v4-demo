import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/index'
import {RenderRouters} from './common/utils'

ReactDOM.render(
    <Router>
        <RenderRouters routes={Routes} top={true}/>
    </Router>,
    document.getElementById('root')
)
