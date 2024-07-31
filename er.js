const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// Error Handing (Express Ddefault)
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED");
};

app.get("/wrong", (req, res) => {
    abcd = abcd;
});

app.get("/api", checkToken, (req, res) => {
    res.send("Data");
});


app.get("/", (req, res) => {
    res.send("Hi, I am Root");
});

// app.use((err, req, res, next) => {
//     // console.log(err);
//     console.log("-------ERROR (i)  --------");
//     res.send(err);
// });

// app.use((err, req, res, next) => {
//     // console.log(err);
//     console.log("-------ERROR  (ii) --------");
//     next(err);
// });

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is Forbidedden")
});

// Default Status And Message
app.use((err, req, res, next) => {
    let { status=500, message="Some Error Occurred" } = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("Server listening to POST 8080");
});