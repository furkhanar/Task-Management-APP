const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

/* ROOT ROUTE */
app.get("/", (req, res) => {
    res.send("Task Manager Backend Running");
});

/* AUTO CREATE TASKS TABLE */
db.query(`
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`, (err) => {
    if (err) {
        console.log("Table creation error:", err);
    } else {
        console.log("Tasks table ready");
    }
});

/* ROUTES */
const taskRoutes = require("./routes/tasks");

app.use("/tasks", taskRoutes);

/* SERVER */
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});