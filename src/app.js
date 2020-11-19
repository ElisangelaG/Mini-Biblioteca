import express from "express";
import cors from "cors";
import routes from "./routes";
import "./database";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.urlencoded({ extended: true, limit: "100mb" }));
    this.server.use(
      express.json({
        limit: "100mb",
        extended: true
      })
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
