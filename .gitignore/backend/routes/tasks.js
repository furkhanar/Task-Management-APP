const express = require("express");
const router = express.Router();
const connection = require("../db");

// GET ALL TASKS
router.get("/", (req, res) => {

    const q = "SELECT * FROM tasks ORDER BY created_at DESC";

    connection.query(q, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
});

// ADD TASK
router.post("/", (req, res) => {

    const { title } = req.body;

    const q = "INSERT INTO tasks (title) VALUES (?)";

    connection.query(q, [title], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({ message: "Task Added" });
    });
});

// UPDATE TASK
router.put("/:id", (req, res) => {

    const { id } = req.params;
    const { title, completed } = req.body;

    const q = "UPDATE tasks SET title=?, completed=? WHERE id=?";

    connection.query(q, [title, completed, id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({ message: "Task Updated" });
    });
});

// DELETE TASK
router.delete("/:id", (req, res) => {

    const { id } = req.params;

    const q = "DELETE FROM tasks WHERE id=?";

    connection.query(q, [id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({ message: "Task Deleted" });
    });
});

module.exports = router;