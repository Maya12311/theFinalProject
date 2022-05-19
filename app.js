// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");
const res = require("express/lib/response");

const app = express();

//hinzugefügt
require("./config")(app);

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
const { isAuthenticated } = require('./middleware/jwt')



// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

//hinzugefügt

const auth = require("./routes/auth");
app.use("/api/auth", auth);

const event = require("./routes/event");
app.use("/api/event", event);

const neighbears = require("./routes/neighbears");
app.use("/api/neighbears", neighbears); 

const overview = require("./routes/overview");
app.use("/api/overview",isAuthenticated,  overview); 

const addmember = require("./routes/addmember");
app.use("/api/addmember", addmember); 

const profile = require("./routes/profile");
app.use("/api/profile", profile); 



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
