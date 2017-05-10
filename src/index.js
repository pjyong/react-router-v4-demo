import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch } from 'react-router-dom'
import Routes from './routes/index'
import {RenderRouters} from './common/utils'

ReactDOM.render(
    <Router>
        <RenderRouters routes={Routes} parent={Switch}/>
    </Router>,
    document.getElementById('root')
)
