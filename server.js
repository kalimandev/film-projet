const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');
var morgan = require('morgan')


const filmRouter = require('./routes/film')
const authRouter = require('./routes/auth')
const revueRouter = require('./routes/revue')
const filmFavorites = require('./routes/filmFavorite')


const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use('/', express.static(path.join(__dirname,'front',)));

app.use("/films", filmRouter)
app.use("/auth", authRouter)
app.use(revueRouter)

mongoose.connect('mongodb+srv://chat_bot_project:IRBvfBHRrXTfaJX1@cluster0.sbfdh.mongodb.net/film_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.log("connected to mongo db");
    app.listen(port, () => {
        console.log('app running on port ' + port);
    })
}).catch((err)=>console.log(err));


app.get('', (req, res) =>{
  res.sendFile(path.join(__dirname, 'front', 'index.html'));
});





// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const cors = require("cors");
// const mongoose = require("mongoose");
// var morgan = require('morgan')
// const path = require("path")


// const filmRouter = require('./routes/film')
// const authRouter = require('./routes/auth')
// const revueRouter = require('./routes/revue')


// const port = process.env.PORT || 3001;

// const db_hosted = 'mongodb+srv://root:root@cluster0.mjmib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// app.use(bodyParser.json());
// app.use(morgan('dev'))
// app.use(cors());
// app.use(express.json());

// app.use("/films", filmRouter)
// app.use("/auth", authRouter)
// app.use(revueRouter)
// app.use("/",express.static(path.join("angular")))

// mongoose.connect(db_hosted, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// });

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname,"angular","index.html"))
// })

// app.listen(port, () => {
//     console.log('app running on port ' + port);
// })
