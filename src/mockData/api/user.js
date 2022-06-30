// Mock.mock( template )
// 根据数据模板生成模拟数据。

const mockApiDef = {
    '/user/info': { email: '@email', cname: '@cname' },
};
module.exports = {
    ...mockApiDef,
};
