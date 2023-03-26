const express = require ('express')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 7542;


const corsOptions = {
    origin: (origin, callback) => {
        console.log("origin: ", origin);
        callback(null, true);
    },
    credentials: true,
    optionSuccessStatus: 200
}
const jsonBodyMiddleWare = express.json()

app.use(jsonBodyMiddleWare)
app.use(cors(corsOptions));

// app.use(cookieParser('secret key'))
app.use(cookieParser('secret key', { sameSite: 'none', secure: true }));
app.use('/auth', authRouter);



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/", (req, res) => {
    res.json({message: "hi from Express App"})
    return console.log('Connection closed')
})

app.listen(PORT, () => {
    console.log(`I started listening port: ${PORT}`)
})
