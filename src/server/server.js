import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

const server = express();
server.set("view engine","ejs");
server.use(express.static("dist"));
server.get("/",(req,res)=>{
    const initial = ReactDOMServer.renderToString(<App />);
    res.send(
        `<!doctype HTML>
        <html>
            <head>
                <title>first step </title> 
            </head>
        <body>
            <div id="root">${initial}</div>
            <script src="/main.js"> </script>
        </body>
        </html>
        `
    )
});

server.get("/template",(req,res)=>{
    res.render("page", {data : "sravana"});
});

server.use(express.static("./public"))

server.listen(4242, ()=>console.log("running"))