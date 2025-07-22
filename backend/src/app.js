const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

// Static endpoints.....................

function readJson(file) {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", file), "utf-8")
  );
}

app.get("/api/users", (req, res) => {
  res.json(readJson("users.json"));
});

app.get("/api/categories", (req, res) => {
  res.json(readJson("categories.json"));
});

app.get("/api/products", (req, res) => {
  res.json(readJson("products.json"));
});

// Calling Public endpoints....

app.use(
  "/api/users",
  createProxyMiddleware({
    target: process.env.USER_SERVICE_URL, // http://localhost:5001
    changeOrigin: true,
    logLevel: "debug", // helpful for debugging
    onProxyReq: (proxyReq, req, res) => {
      // Fix for POST body forwarding
      if (req.body) {
        const bodyData = JSON.stringify(req.body);
        proxyReq.setHeader("Content-Type", "application/json");
        proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
      }
    },
  })
);

module.exports = app;
