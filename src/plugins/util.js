"use strict";

const util = {
    test: 100
};

util.maxd = () => 200;


Object.defineProperty(util, 'max', {
    enumerable: true,
    get: () => util.test,
});

export default Object.freeze(util);