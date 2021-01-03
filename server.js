const http = require("http");
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
} = require("./controllers/productController");
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
  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    const id = req.url.split("/")[3];
    getProduct(req, res, id);
  } else if (req.url === "/api/products" && req.method === "POST") {
    createProduct(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "PUT"
  ) {
    const id = req.url.split("/")[3];
    updateProduct(req, res, id);
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
