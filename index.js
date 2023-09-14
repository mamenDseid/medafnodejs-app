import { Telegraf } from "telegraf";
//import { Bot } from "grammy";
import express from 'express'
//import { verifyTelegramWebAppData } from "./validate.js";
import morgan from "morgan"


const app = express()
const port = process.env.PORT || 8080

app.use(morgan('dev'))


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cors())


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


app.get("/", (req, res) => {
    res.send("Hello from Space! 🚀");
  });


  app.use((req, res, next) => {
    const error = new Error();
    error.message = 'Not Found';
    error.status = 404;
    next(error);
});
//https://deta.space/builder/d0rRYWDWyuXN
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: error
    });
});



  app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
  });