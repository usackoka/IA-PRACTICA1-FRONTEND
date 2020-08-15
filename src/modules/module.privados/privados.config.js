import React from 'react';

const CRUDComponent = React.lazy(() => import('./components/Crud/crud.component'))
const LISTComponent = React.lazy(() => import('./components/List/list.component'))

export const privadosConfig = {
    routes: [
        {
            path: '/',
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
