const http = require("http");
const products = require("./data/products");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  //   1. step by step
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<h1>Hello World</h1>");
  //   res.end();

  //   2. shorthand
  //   res.writeHead(200, {
  //     "Content-Type": "application/json",
  //   });
  //   res.end(JSON.stringify(products));

  //   3. with routing
  if (req.url === "/api/products") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(products));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
