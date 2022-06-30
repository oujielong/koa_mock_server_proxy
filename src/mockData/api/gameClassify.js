// Mock.mock( template )
// 根据数据模板生成模拟数据。

// Mock.Random 提供的完整方法（占位符）如下：

// Type	Method
// Basic	boolean, natural, integer, float, character, string, range, date, time, datetime, now
// Image	image, dataImage
// Color	color
// Text	paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle
// Name	first, last, name, cfirst, clast, cname
// Web	url, domain, email, ip, tld
// Address	area, region
// Helper	capitalize, upper, lower, pick, shuffle
// Miscellaneous	guid, id
const mockApiDef = {
    '/xxxx/*': { email: '@email', cname: '@cname', ohterInfo: 'addrdd',abccd:"sddfd"},
};
module.exports = {
    ...mockApiDef,
};