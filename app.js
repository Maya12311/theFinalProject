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

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

//hinzugefügt
const { isAuthenticated } = require('./middleware/jwt')

const auth = require("./routes/auth");
app.use("/api/auth", auth);
//const home = require("../theFinalProject/client/src/pages/Home");          //  <== IMPORT
//app.use("/Home", homeRouter);  

//const login = require("../theFinalProject/client/src/pages/Login");          //  <== IMPORT
//app.use("/Login", loginRouter); 

//const register = require("../theFinalProject/client/src/pages/Register");          //  <== IMPORT
//app.use("/Register", registerRouter); 



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
