import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

const server = express();
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
server.listen(4242, ()=>console.log("running"))