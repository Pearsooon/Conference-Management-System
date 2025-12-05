import express from "express";
import { swaggerDocs } from "./src/config/swagger.js";
import submissionRouter from "./src/routes/v1/submission.route.js";
import finalSubmissionRouter from "./src/routes/v1/finalSubmission.route.js";
import ticketConfigRouter from "src/routes/v1/ticketConfig.route.js";
import cmsRouter from "./routes/v1/cms.route.js";
import aiProofRouter from "./routes/v1/aiProof.route.js";
import bestPaperRouter from "./routes/v1/bestPaper.route.js";
import sessionRouter from "./routes/v1/session.route.js";
import emailRouter from "./routes/v1/email.route.js";
import checkinRouter from "./routes/v1/checkin.route.js";


import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(express.json());

// Mount API routes
app.use("/api/v1/papers", submissionRouter);
app.use("/api/v1/papers", finalSubmissionRouter);
app.use("/api/v1", ticketConfigRouter);
app.use("/api/v1", cmsRouter);
app.use("/api/v1", aiProofRouter);
app.use("/api/v1", bestPaperRouter);
app.use("/api/v1", sessionRouter);
app.use("/api/v1", emailRouter);
app.use("/api/v1", checkinRouter);



// Mount Swagger
swaggerDocs(app, process.env.PORT || 5000);

export default app;
