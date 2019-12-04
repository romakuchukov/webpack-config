"use strict";

const util = {
    mo: 500,
    sm: 650,
    lx: 1200,
    get moDn() { return this.mo - .1; },
    get smDn() { return this.sm - .1; },
    get lxDn() { return this.lx - .1; }
};

console.log('fsdfsdfsdfsdfsd')

Object.defineProperty(util, 'max', {
    enumerable: true,
    get: () => util.lx,
});

export default Object.freeze(util);