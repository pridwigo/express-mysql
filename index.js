const express = require('express');

const app = express();

// pattern routing di express
//  app.method(path, handler);
// use bisa menggunakan semua method (post,get, delete dll)
// use biasa digunakan di middleware dimana dia akan menghandle semua method
// kemudian dilakukan handling middleware 
// app.use("/", (req, res, next)=>{
//     // handler
//     res.send("Hello world")
// });
// res respon
// req request
app.get("/", (req, res) => {
    res.send("<h1>Hello get method</h1>")
});

app.post("/", (req, res) => {
    res.json({
        "Nama":"Dwi",
        "Alamat": "Bogor"
    })
});

app.listen(4000, () => {
    console.log('Server berhasil di running di port 4000');
})