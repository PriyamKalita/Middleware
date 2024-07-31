const express = require("express");
const app = express();

// MiddleWare Function
// app.use((req, res) => {
//     console.log("Hi, I am middleware");
//     res.send("Middlware Finished");
// });

// app.use((req, res) => {
//     let {query} = req.query;
//     console.log(query);
//     console.log("Hi, I am middleware");
//     res.send("Middlware Finished");
// });

// Using Next
// app.use((req, res, next) => {
//     console.log("Hi, I am First middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am Second middleware");
//     next();
// });

// Creating Utility Middleware
// logger
// app.use((req, res, next) => {
//     req.time = Date.now();
//     console.log(req.method, req.hostname, req.path, req.time);
// });

// API Token as Query String
// app.use("/api", (req, res, next) => {
//     let { token } = req.query;
//     if(token === "giveaccess"){
//         next();
//     }
//     res.send("ACCESS DENIED");
// });

// app.get("/api", (req, res) => {
//     res.send("Data");
// });

// Passing Multiple Middlewares
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if(token === "giveaccess"){
        next();
    }
    res.send("ACCESS DENIED");
};

app.get("/api", checkToken, (req, res) => {
    res.send("Data");
});


app.get("/", (req, res) => {
    res.send("Hi, I am Root");
});

// Route
app.get("/random", (req, res) => {
    res.send("This is a random Page");
});

// 404   ( If Path dose't Match with above Path's)
app.use((req, res) => {
    res.send("Page Not Found");
});

app.listen(8080, () => {
    console.log("Server listening to POST 8080");
});