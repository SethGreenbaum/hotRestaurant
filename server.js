var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/waitlist", (req, res) => {
    
});

app.get("/api/tables", (req, res) => {
    
});


app.listen(PORT, () => {
    console.log("App listening on http://localhost:" + PORT);
  });
  