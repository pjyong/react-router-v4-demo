import List from '../pages/msg/List'
import Detail from '../pages/msg/Detail'
import DetailContent from '../pages/msg/DetailContent'
import DetailComment from '../pages/msg/DetailComment'
import React from 'react';


export default [
    {
        path: '/msg/list',
        component: List
    },
    {
        path: '/msg/detail',
        render: () => {
            const routes = [{
                path: '/msg/detail/content',
                component: DetailContent
            },{
                path: '/msg/detail/comment',
                component: DetailComment
            }]
            return <Detail routes={routes}/>
        }
    },
]
