var url = require('url');
var adr = 'http://127.0.0.1:8085/home.htm?year=2018&month=may';
var q = url.parse(adr, true);
var qdata = q.query;

console.log(q.pathname);
console.log(q.host);
console.log(q.search);
console.log(qdata.year);
console.log(qdata.month);