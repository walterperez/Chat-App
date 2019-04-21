// Express Server
const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const morgan = require("morgan");

//Import Routes
const indexRoute = require("./routes/api/indexRoute");
const userRoute = require("./routes/api/userRoute");
const roomRoute = require("./routes/api/roomRoute");

//Database & Configs
require("./database");
require("./helpers/passport")

// Socket.io
const SocketIO = require("socket.io");

//Settings
app.set("PORT", process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: '0-Chat-1-App-2-Secret-3-ID-4',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/api/",indexRoute);
app.use("/api/user",userRoute);
app.use("/api/room:id",roomRoute);

//Static Files
// app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname,"public")));

//Start Express Server
const server = app.listen(app.get("PORT"), ()=>{
    console.log(`Express Server running on port: ${app.get("PORT")}`);
})

//Socket IO
const io = SocketIO(server)

io.on("connection", (socket)=>{
    
    console.log(`New Connected User: ${socket.id}`)

    socket.on("chat:message",(data)=>{
        io.sockets.emit("chat:message",data);
    })

    socket.on("chat:typing",(username)=>{
       socket.broadcast.emit("chat:typing",username);
    })
})