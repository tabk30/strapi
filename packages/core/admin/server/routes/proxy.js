'use-strict'

module.exports = [
    {
        method: 'GET',
        path: '/proxy/(.*)',
        handler: 'proxy.forwardProcess',
        config: {
          policies: ['admin::isAuthenticatedAdmin'],
        },
    },
    {
        method: 'POST',
        path: '/proxy/(.*)',
        handler: 'proxy.forwardProcess',
        config: {
          policies: ['admin::isAuthenticatedAdmin'],
        },
    },
    {
        method: 'PUT',
        path: '/proxy/(.*)',
        handler: 'proxy.forwardProcess',
        config: {
          policies: ['admin::isAuthenticatedAdmin'],
        },
    },
    {
        method: 'DELETE',
        path: '/proxy/(.*)',
        handler: 'proxy.forwardProcess',
        config: {
          policies: ['admin::isAuthenticatedAdmin'],
        },
    },
]