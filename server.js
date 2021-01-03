const http = require("http");
const products = require("./data/products");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  //   step by step
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<h1>Hello World</h1>");
  //   res.end();

  //   shorthand
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(products));
});

server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
