const http = require('http');

const hostname = '127.0.0.1';
const port = 3030;

const server = http.createServer((req, res) => {
  // 发送 HTTP 头部 
  // HTTP 状态值: 200 : OK
  // 内容类型: text/plain
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plaim');
  res.end('Hello node\n');
});

server.listen(port, hostname, () => {
  console.log('Server running at http://127.0.0.1:3030/');
});