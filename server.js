const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "signup"
});

// Middleware setup
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello from backend!" });
});

// Handle errors gracefully
function handleDatabaseError(res, err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred on the server." });
}

app.get("/users", (req, res) => {
    const q = "SELECT * FROM users";
    db.query(q, (err, data) => {
        if (err) {
            handleDatabaseError(res, err);
        } else {
            res.json({ data });
        }
    });
});

app.post("/users", (req, res) => {
    const q = "INSERT INTO users (Name, Age, Year) VALUES (?, ?, ?)";
    const values = [req.body.Name, req.body.Age, req.body.Year];

    db.query(q, values, (err, result) => {
        if (err) {
            handleDatabaseError(res, err);
        } else {
            res.json({ message: "User has been created!", data: result });
        }
    });
});

app.listen(8800, () => {
    console.log("Connected to backend!");
});
