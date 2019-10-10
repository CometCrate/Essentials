import express from "express";
import compression from "compression";
import apiRouter from "./controllers";
import * as path from "path";

// Setup
const app = express();
const port: string | number = process.env.PORT || 3000;

// API
app.use("/api", apiRouter);

// Static Files
app.use("/", compression(), express.static(path.resolve(__dirname, "public")));
app.get("*", compression(), async (request, response) => {
    response.sendFile(path.resolve(__dirname, "public/index.html"));
});

// Finalize
app.listen(port, () => console.log(`App listening on port ${port}`));

export default app;
