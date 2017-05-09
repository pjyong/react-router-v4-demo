import React from 'react';
import { Route,Switch,Link } from 'react-router-dom'

export const Page = (props) => {
    const {children} = props;
    return (
        <div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/msg/list">Msg list</Link></li>
                    <li><Link to="/msg/detail">Msg detail</Link></li>
                    <li><Link to="/msg/detail/content">Msg detail content</Link></li>
                    <li><Link to="/msg/detail/comment">Msg detail comment</Link></li>
                  </ul>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export const RenderRouters = (props) => {
    if(typeof props.routes === 'undefined'){
        return null
    }
    if(props.top){
        return (<Switch>{props.routes.map((route, index)=>{
            return <Route path={route.path} component={route.component} render={route.render} key={index} />
        })}</Switch>)
    }else{
        return (<div>{props.routes.map((route, index)=>{
            return <Route path={route.path} component={route.component} render={route.render} key={index} />
        })}</div>)
    }
}
