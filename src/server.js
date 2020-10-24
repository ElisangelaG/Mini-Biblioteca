/* eslint-disable import/first */
require("dotenv").config();

import app from "./app";

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3331;

app.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`Ready on ${HOST}:${PORT} -> (${process.env.ENV})`);
});
