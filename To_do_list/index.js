const express = require("express");
const path = require("path");
const { dirname } = require("path/win32");
const routes = require("./routes/routes");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
