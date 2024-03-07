

import express from 'express';

const app = express();

app.use(express.urlencoded({extended:true}))

const products=[
    {id:"1",nombre:"Arroz",precio:700,stock:25},
    {id:"2",nombre:"Azucar",precio:900,stock:35},
    {id:"3",nombre:"Leche",precio:1200,stock:50},
    {id:"4",nombre:"Yerba",precio:1300,stock:20},
    {id:"5",nombre:"Aceite",precio:1500,stock:38}
];


app.get("/",(req,res)=>{
    res.send(products)
})

app.get("/:precio",(req,res)=>{
    const precio=req.query.precio

    if(precio < 2000 ){
        return res.send(products)
    }

    const precioFiltrado= products.filter(products=> products.precio > 1000);

    res.send({precioFiltrado});


})


const port = 8080;
app.listen(port ,()=>{
    console.log( `servidor activo en http://localhost:${port} `)
})
