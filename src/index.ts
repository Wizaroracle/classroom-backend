import express from "express";
import subjectsRouter from "./routes/subjects";
import cors from "cors";
const app = express();
const PORT = 8000;

//Cors
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // React app URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // allow cookies
  }),
);
// Middleware
app.use(express.json());
//Routes
app.use("/api/subjects", subjectsRouter);

// Root GET route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the classroom backend server!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
