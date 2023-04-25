'use strict';

module.exports = {
    async forwardProcess (ctx) {
        console.log("forwardProcess", ctx);
        
        ctx.body = {
            data: "forward success",
          };
    }
}