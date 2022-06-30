const Mock = require('mockjs');
const FS = require('fs');
const PATH = require('path');
const chokidar = require('chokidar');
const controllers = require('require-all')({
    dirname: PATH.join(__dirname, `.${PATH.sep}api`),
});
const HTTP = require('http');
async function matchApi_returnDate(ctx) {
    let url = ctx.URL.pathname;
    let allApiControl_array = Object.values(controllers);
    let AllObj = Object.assign(...allApiControl_array);
    let targetUrl = Object.keys(AllObj).filter((item) => {
        let key = new RegExp(item.replace(/\//, '/'), 'ig');
        return key.test(url);
    })[0];
    if (targetUrl != 'undefined') {
        let KoaReq = ctx.request;
        let { header, method, protocol, originaUrl } = KoaReq;
        let host = '45.113.192.101';
        let proxysList = ['http://CNPriProxy.aia.biz:10938', 'http://bjs1.sme.zscalertwo.net:10938', 'http://165.225.112.16:10938'];
        let proxyResult = await request_promise({
            host: 'CNPriProxy.aia.biz',
            port: '10938',
            // proxy: proxysList[Math.round(Math.random() * proxysList.length) | 0],
            headers: Object.assign(header, { host: host }),
            method: method,
            // path: originaUrl,
            path: 'https://www.baidu.com/',
            protocol: protocol + ':',
            insecureHTTPParser: true,
        });
        return { desc: '第三方', data: proxyResult };
    } else {
        return Mock.mock(AllObj[targetUrl]);
    }
}

function request_promise(httpRequestOtions) {
    return new Promise((resolve, reject) => {
        let req = HTTP.request(httpRequestOtions, (res) => {
            res.setEncoding('utf-8');
            let dataString = '';
            res.on('data', (chunk) => {
                dataString += chunk;
            });
            res.on('end', () => {
                resolve(dataString);
            });
        });
        switch (String(httpRequestOtions.method).toLowerCase()) {
            case 'post': {
                req.write('asdfadsf');
            }
            default: {
                req.end();
            }
        }
    });
}

module.exports = { matchApi_returnDate: matchApi_returnDate };
