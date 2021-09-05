const express = require("express");
const cors = require("cors");
const bookRouter = require('./router/routes/books')


const app = express();

app.use(express.json())
app.use(cors());


app.use('/books',bookRouter)


const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
