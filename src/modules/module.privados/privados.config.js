import React from 'react';

const CRUDComponent = React.lazy(() => import('./components/crud.component'))
const LISTComponent = React.lazy(() => import('./components/list.component'))

export const privadosConfig = {
    routes: [
        {
            path: '/list',
            render: () => <LISTComponent/>,
            exact: true,
        },
        {
            path: '/crud',
            render: () => <CRUDComponent/>,
            exact: true,
        }
    ]
};
