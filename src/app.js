

import express from "express";
import handlebars from "express-handlebars";
import productRouter from "./routes/product.router.js";
import cartRouter from "./routes/cartRoutes.js";
import viewsRouter from "./routes/viewsRoutes.js";
import __dirname from "./utils.js";
import{ Server} from "socket.io";
import websocket from "webSocket.js" ;


const uri = "mongodb+srv://eze33veron:<25defebrero>@cluster0.ugmh6sf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0mongodb+srv://eze33veron:<password>@cluster0.ugmh6sf.mongodb.net/";
mongoose.connect(uri);


app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/../views');
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/products', viewsRouter);

const PORT = 8080;
const httpServer = app.listen(PORT, () => {
    console.log(`Start server in PORT ${PORT}`);
});

const io = new Server(httpServer);

websocket(io);