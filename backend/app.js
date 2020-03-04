const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5000;

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

app.use(cors())

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

app.get('/product',(req,res)=>{
	 let query = "SELECT * FROM `product` ORDER BY product_id ASC";
	 db.query(query,(err,result)=>{
	 	if(err){
	 		console.log(err)
	 	}
	 	res.json(result)
	 })
})

app.get('/currency',(req,res)=>{
	 let query = "SELECT * FROM `currency` ORDER BY currency_id ASC";
	 db.query(query,(err,result)=>{
	 	if(err){
	 		console.log(err)
	 	}
	 	res.json(result)
	 })
})

app.get('/measurement',(req,res)=>{
	 let query = "SELECT * FROM `measurement` ORDER BY measurement_id ASC";
	 db.query(query,(err,result)=>{
	 	if(err){
	 		console.log(err)
	 	}
	 	res.json(result)
	 })
})

app.get('/price',(req,res)=>{
	 let query = "SELECT * FROM `product_price` ORDER BY product_price_id ASC";
	 db.query(query,(err,result)=>{
	 	if(err){
	 		console.log(err)
	 	}
	 	res.json(result)
	 })
})

app.get('/region',(req,res)=>{
	 let query = "SELECT * FROM `region` ORDER BY region_id ASC";
	 db.query(query,(err,result)=>{
	 	if(err){
	 		console.log(err)
	 	}
	 	res.json(result)
	 })
})

app.get('/regional_level',(req,res)=>{
	 let query = "SELECT * FROM `regional_level` ORDER BY regional_level_id ASC";
	 db.query(query,(err,result)=>{
	 	if(err){
	 		console.log(err)
	 	}
	 	res.json(result)
	 })
})

app.get('/user',(req,res)=>{
	 let query = "SELECT * FROM `user` ORDER BY user_id ASC";
	 db.query(query,(err,result)=>{
	 	if(err){
	 		console.log(err)
	 	}
	 	res.json(result)
	 })
})

app.get('/',(req,res)=>{

	res.send('Running on the Server')
})



app.set('port', process.env.port || port);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});



