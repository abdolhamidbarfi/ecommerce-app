const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const validator = require("express-validator");
const session = require("express-session");
const { MongoStore } = require("connect-mongo");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const passPort = require("passport");

module.exports = class Application {
    constructor() {
        this.start().catch((error) => {
            console.error("Application failed to start:", error);
            process.exitCode = 1;
        });
    }

    async start() {
        await this.setMongoConnection();
        this.setConfig();
        this.setupExpress();
        this.setRouters();
    }

    setupExpress() {
        const server = http.createServer(app);
        server.listen(3000, () => console.log("Listening on port 3000"));
    }

    async setMongoConnection() {
        await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    }

    // Express Config
    setConfig() {
        // Serving static files
        app.use(express.static("public"));
        // Using template engines
        app.set("view engine", "ejs");
        // set views directory
        app.set("views", path.resolve("./resource/views"));
        // set body-parser

        // parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: true }));
        // parse application/json
        app.use(bodyParser.json());

        // session
        app.use(
            session({
                secret: "secret_key",
                resave: false,
                saveUninitialized: true,
                store: MongoStore.create({
                    client: mongoose.connection.getClient(),
                }),
            }),
        );

        app.use(cookieParser("secret_key"));

        app.use(flash());
    }

    setRouters() {
        app.use(require("app/routes/web"));
        app.use("/api", require("app/routes/api"));
    }
};
