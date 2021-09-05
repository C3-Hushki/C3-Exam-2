const mongoose = require('mongoose')


const options = {
    useUrlParser:true,
    useCreateIndex:true,
    useUifiedIndex:true
}
mongoose.connect('mongodb://localhost:27017/Omar_Hushki', options ,(res)=>{
    console.log('....Connected')
},(err)=>{
    console.log(err)
} )