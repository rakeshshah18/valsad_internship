const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const secretKey = "thisissecretkey";

app.get("/", (req, res) => {
  res.json({
    message: "My name is Rakesh",
  });
});

app.post("/login", (req, resp) => {
  const user = {
    id: 1,
    name: "Rakesh",
    email: "rakesh123@gmail.com",
  };
  jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
    resp.json({
      token,
    });
  });
});

app.post("/profile", verifyToken, (req, res) => {
    jwt.verify(req.token,secretKey,(err,authData)=>{
        if(err){
            res.send({result:"Wrong Token"})
        }else{
            res.json({
                message:"Profile Accessed",
                authData
            })
        }
    })
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token=token
    next();//next funtion will re-direct inside the verifyToken 
  } else {
    res.send({
      result: "Invalid Token",
    });
  }
}

app.listen(5000, () => {
  console.log("App is running on 5000 port");
});
