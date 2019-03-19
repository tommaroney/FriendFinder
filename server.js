const express = require("express");

const htmlRoutes = require("./app/routing/htmlRoutes.js");
const apiRoutes = require("./app/routing/apiRoutes.js");

const app = express();

app.use(express.static("app/public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
});