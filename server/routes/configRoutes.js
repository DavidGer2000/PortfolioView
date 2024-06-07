
const indexR = require("./index")
const usersR = require("./users")
const apiR = require("./api")

exports.routesInit = (app) => {
    app.use("/",indexR)
    app.use("/users",usersR)
    app.use("/api",apiR)
}