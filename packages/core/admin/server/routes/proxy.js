'use-strict'

module.exports = [
    {
        method: 'GET',
        path: '/proxy/(.*)',
        handler: 'proxy.forwardGet',
        config: {
          policies: ['admin::isAuthenticatedAdmin'],
        },
    },
    {
        method: 'POST',
        path: '/proxy/(.*)',
        handler: 'proxy.forwardPost',
        config: {
          policies: ['admin::isAuthenticatedAdmin'],
        },
    },
    {
        method: 'PUT',
        path: '/proxy/(.*)',
        handler: 'proxy.forwardPut',
        config: {
          policies: ['admin::isAuthenticatedAdmin'],
        },
    },
    {
        method: 'DELETE',
        path: '/proxy/(.*)',
        handler: 'proxy.forwardDelete',
        config: {
          policies: ['admin::isAuthenticatedAdmin'],
        },
    },
]