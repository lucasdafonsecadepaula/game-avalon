import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

app.get("/get-test", (req, res) => {
  res.status(200).json({ ok: "oksaf3qasdasdasdasdad2asdasdsadq" });
});

server.listen(8000, () => {
  console.log("listening on *:8000");
});
