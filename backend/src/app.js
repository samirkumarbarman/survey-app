import express from "express";
import adminRoutes from "./routes/adminRouter.js";
import participantRoutes from "./routes/participantRouter.js";
import surveyRoutes from "./routes/surveyRouter.js";
import responseRoutes from "./routes/responseRouter.js";
import apiKeyRoutes from "./routes/apikeyRouter.js";

const app = express();

app.use("/admin", adminRoutes);
app.use("/participant", participantRoutes);
app.use("/survey", surveyRoutes);
app.use("/response", responseRoutes);
app.use("/apikey", apiKeyRoutes);

export default app;