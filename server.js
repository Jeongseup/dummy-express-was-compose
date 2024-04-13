// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');

app.use(morgan((tokens, req, res) => [
  `Client Hostname: ${req.hostname}`,
  `Method: ${tokens.method(req, res)}`,
  `URL: ${tokens.url(req, res)}`,
  `Status: ${tokens.status(req, res)}`,
  `Content-Length: ${tokens.res(req, res, 'content-length')}`,
  `Response-Time: ${tokens['response-time'](req, res)}ms`,
  `Remote-Addr: ${tokens['remote-addr'](req, res)}`,
  `Referrer: ${tokens.referrer(req, res)}`,
  `User-Agent: ${tokens['user-agent'](req, res)}`,
  `Date: ${new Date().toISOString()}`,
  `HTTP-Version: ${tokens['http-version'](req, res)}`,
  `Req-Headers: ${JSON.stringify(req.headers)}`,
  `Res-Headers: ${JSON.stringify(res.getHeaders())}`
].join(' | ')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

