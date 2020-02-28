var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var tables = [{
    table: "Table 1",
    id: 0,
    name: "Jeffrey",
    email: "fake@email.com",
    phone: "555-555-555"
}];
var waitlist = [];
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reservations", (req, res) => {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/waitlist", (req, res) => {
    return res.json(waitlist)
});
app.get("/api/tables", (req, res) => {
    return res.json(tables)
});
app.post("/api/waitlist", (req, res) => {
    var newTable = req.body;
    // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
    console.log(newTable);
    waitlist.push(newTable);
    res.json(newTable);
});
app.post("/api/tables", (req, res) => {
    var newTable = req.body;
    // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
    console.log(newTable);
    tables.push(newTable);
    res.json(newTable);
});
app.listen(PORT, () => {
    console.log("App listening on http://localhost:" + PORT);
});