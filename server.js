const express = require('express');
const { env } = require('./src/config/env');
const app = express();
const {connectDatabase} = require("./src/db/db")
app.use(express.json());
const slotRoutes = require("./src/routes/slotRoutes")
connectDatabase()

app.use("/api/slot", slotRoutes)
app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
})