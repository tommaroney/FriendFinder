const express = require("express");

const htmlRoutes = require("./app/routing/htmlRoutes.js");
const apiRoutes = require("./app/routing/apiRoutes.js");

const app = express();

app.use(express.static("app/public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
});