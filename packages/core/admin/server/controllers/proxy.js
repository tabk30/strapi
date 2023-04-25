'use strict';

module.exports = {
    async forwardGet (ctx) {
        const url = ctx.url;
        const forwardPath = url.slice(12);

        ctx.body = {
            data: {
                method: ctx.method,
                url: `http://xyz.com${forwardPath}`
            }
        };
    },
    async forwardPost (ctx) {
        const url = ctx.url;
        const forwardPath = url.slice(12);
        const { body: input } = ctx.request;

        ctx.body = {
            data: {
                method: ctx.method,
                url: `http://xyz.com${forwardPath}`,
                body: input
            }
        };
    },
    async forwardPut (ctx) {
        const url = ctx.url;
        const forwardPath = url.slice(12);
        const { body: input } = ctx.request;

        ctx.body = {
            data: {
                method: ctx.method,
                url: `http://xyz.com${forwardPath}`,
                body: input
            }
        };
    },
    async forwardDelete (ctx) {
        const url = ctx.url;
        const forwardPath = url.slice(12);

        ctx.body = {
            data: {
                method: ctx.method,
                url: `http://xyz.com${forwardPath}`
            }
        };
    }
}