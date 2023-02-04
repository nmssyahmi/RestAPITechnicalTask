const express = require(`express`);
const app = express();

const products = require(`./routes/products`);

//parse form data urclencoded for parse incoming request
app.use(express.urlencoded({ extended: false }));
//parse Json
app.use(express.json({ success: true, data: products }));
app.use("/api/products", products);

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on ${port}`));
